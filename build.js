"use strict";

const fs = require("fs");
const path = require("path");
const glob = require("glob");

const rollup = require("rollup");
const postcss = require("postcss");
const sass = require("rollup-plugin-sass");
const sassyImport = require("postcss-sassy-import");

// Variables
const sassFileName = "pixel-perfect";
const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, "src/lib");
const distFolder = path.join(rootFolder, "dist");

return Promise.resolve()
	.then(() => Promise.resolve()
		.then(() => generateSASS())
		.then(() => console.log("SASS successfully generated"))
	)
	.then(() => Promise.resolve()

		.then(() => _relativeCopy("package.json", srcFolder, distFolder))
		.then(() => _relativeCopy("README.md", rootFolder, distFolder))
		.then(() => console.log("Package files copy succeeded."))
	)
	.catch(e => {
		console.error("Build failed. See below for errors.\n");
		console.error(e);
		process.exit(1);
	});


/**
 * Collects all SASS in one file.
 * @returns {Promise}
 */
function generateSASS () {
	const themeScssFromPath = path.join(srcFolder, sassFileName + ".scss");
	const themeScssToPath = path.join(distFolder, sassFileName + ".scss");

	const postCssConfig = [
		sassyImport({
			formats: ["%.scss"]
		})
	];

	return new Promise((resolve, reject) => {
		fs.readFile(themeScssFromPath, (err, css) => {
			postcss(postCssConfig).process(css, {from: themeScssFromPath, to: themeScssToPath}).then(res => {
				fs.writeFile(themeScssToPath, res.css, (err) => {
					resolve();
				});
			});
		});
	});
}

/**
 * Copy files maintaining the relative paths.
 * @param fileGlob
 * @param from
 * @param to
 * @returns {Promise}
 * @private
 */
function _relativeCopy (fileGlob, from, to) {
	return new Promise((resolve, reject) => {
		glob(fileGlob, {cwd: from, nodir: true}, (err, files) => {
			if (err) reject(err);
			files.forEach(file => {
				const origin = path.join(from, file);
				const dest = path.join(to, file);
				const data = fs.readFileSync(origin, "utf-8");
				_recursiveMkDir(path.dirname(dest));
				fs.writeFileSync(dest, data);
				resolve();
			});
		});
	});
}

/**
 * Recursively creates a directive.
 * @param dir
 * @private
 */
function _recursiveMkDir (dir) {
	if (!fs.existsSync(dir)) {
		_recursiveMkDir(path.dirname(dir));
		fs.mkdirSync(dir);
	}
}
import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

export const cssVar = (name: string) => `--${name}`;

// Ensure the name is a valid CSS variable
export const ensureCssVar = (name: string) => !name.startsWith("--") ? cssVar(name) : name;

export declare type CssVariable = string | number;
export declare type CssVariables = { [name: string]: CssVariable };

@Injectable()
export class ThemeService {

	constructor (@Inject(DOCUMENT) private document: Document) {
	}

	/**
	 * Sets a map of variables.
	 * @param {CssVariables} vars
	 */
	setVars (vars: CssVariables) {
		for (let name in vars) {
			const value = vars[name];
			this.set(name, value);
		}
	}

	/**
	 * Sets a variable in the document root of the application.
	 * @param {string} name
	 * @param {CssVariable} val
	 */
	set (name: string, val: CssVariable) {
		if (val === null) {
			throw Error(`The variable '${name}' was expected to have a value.`);
		}
		this.document.documentElement.style.setProperty(ensureCssVar(name), `${val}`);
	}

	/**
	 * Removes a CSS variable from the application.
	 * @param {string} name
	 */
	remove (name: string) {
		this.document.documentElement.style.removeProperty(ensureCssVar(name));
	}

	/**
	 * Returns the value associated with a variable name.
	 * @param {string} name
	 * @returns {CssVariable}
	 */
	get (name: string): CssVariable {
		const computedStyle = getComputedStyle(this.document.documentElement);
		return computedStyle.getPropertyValue(ensureCssVar(name)).trim();
	}
}

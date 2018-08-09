"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description
 *
 * Represents a type that a Component or other object is instances of.
 *
 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
 * the `MyCustomComponent` constructor function.
 *
 *
 */
exports.Type = Function;
function isType(v) {
    return typeof v === 'function';
}
exports.isType = isType;

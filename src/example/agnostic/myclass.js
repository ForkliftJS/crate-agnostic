/**
 * This is an example module.
 *
 * @module Example
 */

/**
* This is the description for my class.
*
* @class MyClass
* @constructor
*/
function MyClass(name) {
  /**
  * A person's first name
  *
  * @property name
  * @type {String}
  * @default "world"
  */
  this.name = name || 'world';
}

/**
* Generate a personal greeting
* based on a person's name
*
* @method hello
* @return {String} Returns greeting on success
*/
MyClass.prototype.hello = function() {
  return `hello #{this.name}`; // eslint-disable-line quotes
};

const myClass = new MyClass('Nicky');
const greeting = myClass.hello();

console.log(greeting); // eslint-disable-line no-console

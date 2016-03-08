/**
 * Main/entry module of the application.
 * You can bootstrap your application
 * and import any other modules from here.
 *
 * @module Main
 */

// Load environment exclusive logic bundles
import './main.development';
import './main.production';

console.log('ayy lmao');

import Qt from 'Qt';
Qt.saySomethingQt();

// Bootstrap your angular module and include your components here
// import './components/demo';

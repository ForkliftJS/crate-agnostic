/* eslint-disable no-var */
var path = require('path'); // eslint-disable-line no-unused-vars

module.exports = {
  crate: 'Agnostic',
  vendorAliases: {
    // EXAMPLE:
    //   jquery: path.join('bower', 'jquery', 'dist', 'jquery.js'),
    //   bootstrapStyles: path.join('bower', 'bootstrap', 'dist', 'css', 'bootstrap.css'),
    //
    // BEFORE ALIAS:
    //   import $ from './vendor/bower/jquery/dist/jquery.js';
    //
    // AFTER ALIAS:
    //   import $ from 'jquery';
    Qt: path.join('vendor', 'QtLib', 'MyQtLibrary.js')
  }
};
/* eslint-enable no-var */

const jsdom = require('jsdom');
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const config = require('../default.json');

enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = dom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.CONFIG = config;
// global.navigator = {
//   userAgent: 'node.js',
// };
// global.requireAnimationFrame = function(callback){
//   return setTimeout(callback,0);
// }

// global.cancelAnimationFrame = function(id){
//   clearTimeout(id);
// }
copyProps(window, global);
var cornerstone = require('cornerstone');
var dicomParser = require('dicom-parser');
var $ = require('jquery');
var cornerstoneMath = require('cornerstoneMath');

if (typeof cornerstoneTools === 'undefined') {
    cornerstoneTools = {
        referenceLines: {},
        orientation: {}
    };
}

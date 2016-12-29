var cornerstone = require('../../cornerstone/build/built');
var dicomParser = require('dicom-parser');
var $ = require('jquery');
var cornerstoneMath = require('../../cornerstoneMath/build/built');

if (typeof cornerstoneTools === 'undefined') {
    cornerstoneTools = {
        referenceLines: {},
        orientation: {}
    };
}

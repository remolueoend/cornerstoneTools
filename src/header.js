var cornerstone = require('../../cornerstone/dist/cornerstone');
var dicomParser = require('dicom-parser');
var $ = require('jquery');
var cornerstoneMath = require('../../cornerstoneMath/dist/cornerstoneMath');

if (typeof cornerstoneTools === 'undefined') {
    cornerstoneTools = {
        referenceLines: {},
        orientation: {}
    };
}

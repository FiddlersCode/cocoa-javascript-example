const CocoaJS = require('cocoajs');
const add = require('./params/add');


describe('test eq method', () => {
    describe('addition method', () => {
        CocoaJS.eq(
            add.scenarios(),
            add.setup(),
            add.setup().paramsFilePath,
        );
    });
});

// Credit to:
// https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass
var fs    = require('fs');
var path  = require('path');
var types = require('node-sass').types;

module.exports = function(options) {
    options = options || {};

    var base = options.base || process.cwd();
    return {
        'inline-image($file)': function(file) {
            // we want to file relative to the base
            var relativePath = './' +options.url+ file.getValue();
            var filePath = path.resolve(base, relativePath);

            // get the file ext
            var ext = filePath.split('.').pop();

            // read the file
            var data = fs.readFileSync(filePath);

            var buffer = new Buffer(data);

            //https://github.com/behance/sass-inline-image/commit/3a1dc2edba74ee4d6cf7d327755b1f72a0e90522
            var str = "url('data:image/" + (ext === 'svg' ? ext + '+xml' : ext)  + ";base64," + buffer.toString('base64') + "')";
            
            return types.String(str);
        }
    };
};

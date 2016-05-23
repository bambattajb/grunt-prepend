/*
 * grunt-prepend
 * 
 *
 * Copyright (c) 2016 bambattajb
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var fs    = require('fs');
  
  grunt.registerMultiTask('gruntPrepend', 'Appends or prepends files with text', function() {

    var options = this.options({
      content   : ''
    }),
        $this = this;

    this.files.forEach(function (f) {
      var file    = __dirname + '/../../../' + f.src[0],
          data,
          fd;
      
      if($this.target=='prepend') {
        data  = fs.readFileSync(file);
        fd    = fs.openSync(file, 'w+');
        var buffer = new Buffer(options.content + '\n');
        fs.writeSync(fd, buffer,0, buffer.length);
        fs.writeSync(fd, data,  0,   data.length);
        fs.close(fd);
      }

      else if($this.target=='append') {
        data    = fs.readFileSync(file);
        fd      = fs.openSync(file, 'w+');
        fs.write(fd, data + "\n" + options.content);
        fs.close(fd);
      }

      else if($this.target=='concat') {

        var concat = '';

        if(!options.fileOut) {
          grunt.fail.fatal('No output file for concat');
        } else {
          f.src.forEach(function (src) {
            concat += grunt.file.read(src);
          });
        }
        grunt.file.write(options.fileOut, concat);
      }
    });
  });
};

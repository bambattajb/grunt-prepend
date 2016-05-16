# grunt-prepend

> It's really simple. This plugin just Appends or Prepends files with text. I find it useful to add comments above files after they've been compiled. Example is if you decide to compile less files to the style.css file in a WordPress theme directory

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-prepend --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-prepend');
```

## The "prepend" task

### Overview

In your project's Gruntfile, add a section named `prepend` to the data object passed into `grunt.initConfig()`.

```js

var prependThis  = '/* \n' +
            'Theme Name : My Awesome Theme \n' +
            'Author : Joe Buckle \n' +
            'Description : It\'s so awesome \n' +
            '*/ \n';

var date = new Date();
var appendThis  = '/* \n' +
            'Compiled on ' + date + '\n'+
        '*/';


grunt.initConfig({
    prepend: {
        prepend : {
            options: {
                content: prependThis
            },
            files: [{
                src     : '../../style.css'
            }]
        },
        append : {
            options : {
                content: appendThis
            },
            files: [{
                src     : '../../style.css'
            }]
        }
    }
});

grunt.loadNpmTasks('grunt-prepend');
grunt.registerTask('default', ['prepend']);

```

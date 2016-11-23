# gulp-base64-image

`npm i gulp-base64-image`

Use the `inline-image` function from Compass in [gulp-sass](https://www.npmjs.com/package/gulp-sass) ([node-sass](https://www.npmjs.com/package/node-sass)).

## usage

```js
// in gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');
var inline_image = require('gulp-base64-image');
gulp.src('screen.sass')
    .pipe(
        sass({
            functions: inline_image({url:'path/to/images/'})
        })
    )
    .pipe(gulp.dest('./css'));
```

```sass
body
  background: inline-image('image.png')
```

## Credit

Credit to [Joseph Clay](https://github.com/JosephClay/sass-inline-image).

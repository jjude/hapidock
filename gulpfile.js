"use strict";

let gulp = require('gulp');
let ts = require("gulp-typescript")
let nodemon = require("gulp-nodemon");

gulp.task("default", ["serve"]);

gulp.task("watch", () => {
  gulp.watch('src/**/*.ts', ["compile"]);
});

gulp.task("compile", () => {
  console.log("compiling files")
  return gulp.src(['src/**/*.ts'])
  .pipe(ts({module: 'commonjs'})).js
  .pipe(gulp.dest('build'))
})

gulp.task("serve", ["compile", "watch"], () => {
  nodemon({
    script: "build/server.js",
    env: { "NODE_ENV": "development" }
  })
    .on("restart", () => {
      console.log("restarted");
    })
})


//gulp 模块
const gulp = require("gulp");
//压缩html
const htmlmin = require("gulp-htmlmin");
//压缩css
const cssmin = require("gulp-clean-css");
//css加前缀
const autopre = require("gulp-autoprefixer");
//压缩js
const minjs = require("gulp-uglify");
//babel 处理js ess6压缩
const babel = require("gulp-babel");
//压缩img
const imagemin = require("gulp-imagemin");


//压缩html
gulp.task("html", function () {
    gulp.src(["./src/*.html"]).pipe(htmlmin({
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    })).pipe(gulp.dest("./dist"));
});

//压缩css
gulp.task("cssmin", function () {
    gulp.src(["./src/css/*.css", "./src/css/**/*.css"]).pipe(autopre({
        browsers: ['last 2 versions', 'Android >= 4.0'],
        cascade: true, //是否美化属性值 默认：true 像这样：
        remove: true //是否去掉不必要的前缀 默认：true
    })).pipe(cssmin()).pipe(gulp.dest("./dist/css"));
});

//压缩js
gulp.task("jsmin", function () {
    gulp.src(["./src/js/*.js"]).pipe(babel())
        .pipe(minjs())
        .pipe(gulp.dest("./dist/js"));
});

//压缩img
gulp.task("imagemin", function () {
    // （**匹配src/js的0个或多个子文件夹）
    gulp.src(['./src/imgs/*.{png,jpg,gif,svg,jpeg}', './src/**/*.{png,jpg,gif,svg,jpeg}'])
        .pipe(imagemin({
            optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest("./dist/imgs"));

});

//默认启动方式 (gulp)
gulp.task("default", ["html", "cssmin", "jsmin", "imagemin"]);
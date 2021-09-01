let package = require("./package");
let project_name = package["name"];
let project_folder = "dist";
let source_folder = "src";
let path = {
	build: {
		html: project_folder + "",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/img/",
		fonts: project_folder + "/fonts/",
	},
	src: {
		html: [
			source_folder + "/*.html",
			"!" + source_folder + "/{__,z__}*.html",
		],
		ico: source_folder + "/favicon.ico",
		css: [
			source_folder + "/css/*.scss",
			"!" + source_folder + "/css/{__,z__}*.scss",
		],
		js: [
			source_folder + "/js/*.js",
			"!" + source_folder + "/js/{__,z__}*.js",
		],
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: source_folder + "/fonts/*",
	},
	watch: {
		html: source_folder + "/**/*.html",
		css: source_folder + "/css/**/*.{scss,css}",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
	},
	clean: {
		simple: "./" + project_folder + "/",
	},
};

let { src, dest } = require("gulp"),
	gulp = require("gulp"),
	browsersync = require("browser-sync").create(),
	fileinclude = require("gulp-file-include"),
	del = require("del"),
	scss = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	replace = require("gulp-replace"),
	uglify = require("gulp-uglify-es").default,
	imagemin = require("gulp-imagemin"),
	webp = require("gulp-webp"),
	removeHtmlComments = require("gulp-remove-html-comments"),
	webphtml = require("gulp-webp-html");

function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/",
		},
		port: 3000,
		notify: false,
	});
}

function html() {
	return (
		src(path.src.html)
			.pipe(fileinclude())
			// .pipe(removeHtmlComments())
			// .pipe(webphtml())
			.pipe(dest(path.build.html))
			.pipe(browsersync.stream())
	);
}

function ico() {
	return src(path.src.ico).pipe(dest(path.build.html));
}

function css() {
	return (
		src(path.src.css)
			.pipe(
				scss({
					outputStyle: "expanded",
				})
			)

			// Группировка медиазапросов:
			// .pipe(group_media())

			// Добавление браузерных префиксов
			// .pipe(
			// 	autoprefixer({
			// 		overrideBrowserslist: ["last 5 versions"],
			// 		cascade: true
			// 	})
			// )
			// .pipe(dest(path.build.css))

			// Сжатие CSS
			// .pipe(clean_css())

			.pipe(
				rename({
					extname: ".css",
				})
			)
			.pipe(dest(path.build.css))
			.pipe(browsersync.stream())
	);
}

function js() {
	return (
		src(path.src.js)
			.pipe(fileinclude())

			// Сжатие JS:
			// .pipe(dest(path.build.js))
			// .pipe(
			// 	uglify()
			// 	)

			// .pipe(
			// 	rename({
			// 		extname: ".min.js",
			// 	})
			// )
			.pipe(dest(path.build.js))
			.pipe(browsersync.stream())
	);
}

function images() {
	return (
		src(path.src.img)
			// Преобразование картинок в webp
			// .pipe (
			// 	webp({
			// 			quality: 70
			// 		})
			// 	)

			.pipe(dest(path.build.img))
			.pipe(src(path.src.img))

			// Сжатие картинок
			// .pipe(
			// 	imagemin({
			// 		interlaced: true,
			// 		progressive: true,
			// 		optimizationLevel: 5,
			// 		svgoPlugins: [{ removeViewBox: true }]
			// 	})
			// )

			.pipe(gulp.dest(path.build.img))
			.pipe(dest(path.build.img))
			.pipe(browsersync.stream())
	);
}

function fonts() {
	return src(path.src.fonts).pipe(dest(path.build.fonts));
}

function watchFiles(params) {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
}

function clean(params) {
	return del(path.clean.simple);
}

let build = gulp.series(
	clean,
	gulp.parallel(js, css, ico, html, images, fonts)
);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

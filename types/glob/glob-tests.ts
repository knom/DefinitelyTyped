import glob = require("glob");
const Glob = glob.Glob;

(() => {
	const pattern = "test/a/**/[cg]/../[cg]";
	console.log(pattern);

	const mg = new Glob(pattern, {mark: true, sync: true, symlinks: {"test/a/foo": true}}, (er, matches) => {
		if (er) {
			console.error(er);
			return;
		}
		console.log("matches", matches);
	});
	console.log("after");
})();

(() => {
	const pattern = "{./*/*,/*,/usr/local/*}";
	console.log(pattern);

	const mg = new Glob(pattern, {mark: true}, (er, matches) => {
		if (er) {
			console.error(er);
			return;
		}
		console.log("matches", matches);
	});
	console.log("after");
})();

glob.sync('/foo/*', {realpath: true, realpathCache: {'/foo/bar': '/bar'}, ignore: '/foo/baz'});
glob.sync('/*', {nodir: true, cache: {'/': ['bar', 'baz']}, statCache: {'/foo/bar': false, '/foo/baz': {isDirectory() { return true; }}}});

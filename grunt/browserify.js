module.exports = {
	options: {
		browserifyOptions: {
			debug: true
		},
		transform: [
			['reactify', {'es6': true}]
		]
	},
	dist: {
		files: {
			'app/assets/build/js/app.js': ['app/assets/js/app.jsx']
		}
	}
};

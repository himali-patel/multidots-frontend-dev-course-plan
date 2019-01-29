/* eslint-disable import/no-extraneous-dependencies */
const bs = require('browser-sync').create();

// Init the server
bs.init({
	server: {
		baseDir: 'sessions',
		directory: true,
	},
	files: [
		'sessions/class-*/modules/**/*.{js,html}',
		'sessions/class-live/browser/*.{js,html,css}',
	],
});

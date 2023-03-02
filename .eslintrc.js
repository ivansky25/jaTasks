module.exports = {
	extends: 'google',
  quotes: [2, 'single'],
  globals: {
    SwaggerEditor: false
  },
	'env': {
		'browser': true,
		'es2021': true
	},
	// 'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': 0,
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};

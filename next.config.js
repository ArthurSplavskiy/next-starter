const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'uk', 'de'],
		defaultLocale: 'en'
	},
	webpack: config => {
		const oneOf = config.module.rules.find(rule => typeof rule.oneOf === 'object');

		if (oneOf) {
			const moduleSassRule = oneOf.oneOf.find(rule =>
				regexEqual(rule.test, /\.module\.(scss|sass)$/)
			);

			if (moduleSassRule) {
				const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('css-loader'));

				if (cssLoader) {
					cssLoader.options = {
						...cssLoader.options,
						modules: {
							...cssLoader.options.modules,
							exportLocalsConvention: 'camelCaseOnly'
						}
					};
				}
			}
		}

		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.(js|ts)x?$/,
			use: ['@svgr/webpack']
		});

		return config;
	}
};

const regexEqual = (x, y) => {
	return (
		x instanceof RegExp &&
		y instanceof RegExp &&
		x.source === y.source &&
		x.global === y.global &&
		x.ignoreCase === y.ignoreCase &&
		x.multiline === y.multiline
	);
};

module.exports = nextConfig;

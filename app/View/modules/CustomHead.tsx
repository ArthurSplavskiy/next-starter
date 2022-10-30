import React from 'react';
import Head from 'next/head';

interface Props {
	titleKey: string;
	descriptionKey: string;
	keywordsKey: string;
	withSuffix?: boolean;
}

export const CustomHead: React.FC<Props> = ({
	titleKey,
	descriptionKey,
	keywordsKey,
	withSuffix = true
}) => {
	return (
		<Head>
			<title>
				titleKey
				{withSuffix ? ' - Page name' : ''}
			</title>
			<meta
				name="description"
				content={keywordsKey}
			/>
			<meta
				name="keywords"
				content={keywordsKey}
			/>
			<link
				rel="icon"
				href="/favicon.ico"
			/>
		</Head>
	);
};

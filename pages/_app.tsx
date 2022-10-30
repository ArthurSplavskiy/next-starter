import { useState } from 'react';
import { AppProps } from 'next/app';

import { CookiesProvider } from 'react-cookie';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { CommonProvider } from '@Context/common';

import '@Styles/main.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const { currency, ...rest } = pageProps;

	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false
					}
				}
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={rest.dehydratedState}>
				<CookiesProvider>
					<CommonProvider currency={currency}>
						<Component {...rest} />
					</CommonProvider>
				</CookiesProvider>
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;

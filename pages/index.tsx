import { GetStaticProps, NextPage } from 'next';
import { withLayout } from '@Layout/Layout';
import { CustomHead } from '@Modules/CustomHead';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { DataService } from '@Services/DataService';

const Home: NextPage = () => {
	const { data, isSuccess } = useQuery(['post', 1], () => DataService.getPost(1));
	return (
		<>
			<CustomHead
				titleKey="home.meta_title"
				descriptionKey="home.meta_description"
				keywordsKey="home.meta_keywords"
				withSuffix={false}
			/>
			{isSuccess && JSON.stringify(data)}
			{/* <HomeContent /> --> VIEW pages */}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(['post', 1], () => DataService.getPost(1));

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			currency: 'USD'
		},
		revalidate: 1
	};
};

export default withLayout(Home);

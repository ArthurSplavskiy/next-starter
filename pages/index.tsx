import { GetServerSideProps, NextPage } from 'next';
import { withLayout } from '@Layout/Layout';
import { CustomHead } from '@Modules/CustomHead';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { DataService } from '@Services/DataService';

const Home: NextPage = () => {
	const { data, isSuccess } = useQuery('res', () => DataService.getRes(1));
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

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery('res', () => DataService.getRes(1));

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			currency: 'USD'
		}
	};
};

export default withLayout(Home);

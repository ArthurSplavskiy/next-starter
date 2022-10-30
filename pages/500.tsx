import { withLayout } from '@Layout/Layout';
import { CustomHead } from '@Modules/CustomHead';
import { NextPage } from 'next';

const Error500: NextPage = () => {
	return (
		<>
			<CustomHead
				titleKey="home.meta_title"
				descriptionKey="home.meta_description"
				keywordsKey="home.meta_keywords"
				withSuffix={false}
			/>
			{/* <Error500Content /> --> VIEW pages */}
		</>
	);
};

export default withLayout(Error500);

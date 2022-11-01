import { GraphQLClient } from 'graphql-request';

type MakeGraphqlRequest = (query: string, variables?: unknown) => any;

export const makeGraphqlRequest: MakeGraphqlRequest = async (query, variables) => {
	const endpoint = process.env.NEXT_PUBLIC_API_URL || '';
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			// 'Access-Control-Allow-Headers': '*',
			// 'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});

	const data = await graphQLClient.request(query, variables);

	return data;
};

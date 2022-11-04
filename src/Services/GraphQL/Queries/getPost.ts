import { gql } from 'graphql-request';
import { makeGraphqlRequest } from '@GraphQL/makeGraphqlRequest';

export const getPost = async (id: number) => {
	const query = gql`
			query getPost($id: ID) {
				post(id: $id) {
					data {
						attributes {
							name
						}
					}
				}
			}
    `;

	const variables = {
		id: id || 1
	};

	const { post } = await makeGraphqlRequest(query, variables);

	return post;
};

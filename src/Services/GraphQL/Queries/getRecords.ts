import { gql } from 'graphql-request';
import { makeGraphqlRequest } from '@GraphQL/makeGraphqlRequest';

export const getRes = async (id: number) => {
	const query = gql`
			query getRes($id: ID) {
				restaurant(id: $id) {
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

	const { restaurant } = await makeGraphqlRequest(query, variables);

	return restaurant;
};

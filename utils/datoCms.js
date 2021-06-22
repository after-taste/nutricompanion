import { GraphQLClient } from 'graphql-request';

const API_TOKEN = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;

export const request = ({ query, variables, preview = false }) => {
    try {
        const endpoint = preview
            ? `https://graphql.datocms.com/preview`
            : `https://graphql.datocms.com/`;
        const client = new GraphQLClient(endpoint, {
            headers: {
                authorization: `Bearer ${API_TOKEN}`
            }
        });
        return client.request(query, variables);
    } catch (error) {
        console.error(error);
        return null;
    }
};

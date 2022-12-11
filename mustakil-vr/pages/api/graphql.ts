import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { createContext } from '../../graphql/context';

import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/typeDefs';

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

export default startServerAndCreateNextHandler(server, {
    context: createContext
});
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

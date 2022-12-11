import prisma from "../lib/prisma";
export const resolvers = {
    Query: {
        projects: async (_parent, _args, ctx) => await prisma.project.findMany(),
    },
};

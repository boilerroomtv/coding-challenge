const { ApolloServer, gql } = require('apollo-server')

const sortSets = require('./lib/sortSets')
const filterSets = require('./lib/filterSets')

const sets = [
  {
    date: 1552132800,
    views: 8065498,
    title: 'Honey Dijon Boiler Room x Sugar Mountain 2018 DJ Set',
    youtubeId: 'm_qewI-1cEs'
  },
  {
    date: 1628118000,
    views: 182551,
    title: 'Yung Singh | BR London: Yung Singh Pres. Daytimers',
    youtubeId: 'kSpRpBDrIFM'
  },
  {
    date: 1628118000,
    views: 9055,
    title: 'Yung Singh | BR London: Yung Singh Pres. Daytimers',
    youtubeId: 'e_iD2OeO1iY'
  },
]

const typeDefs = gql`
  type Set {
    id: Int
  }

  type Query {
    sets(filterBy: String, sortBy: String): [Set]
  }
`;

const resolvers = {
  Query: {
    sets: (args) => {
      // Use filterSets and sortSets here
      return sets
    },
  },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});

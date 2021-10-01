const { ApolloServer, gql } = require('apollo-server')

const sortSets = require('./lib/sortSets')
const filterSetsByTitle = require('./lib/filterSetsByTitle')

const sets = [
  {
    id: 1,
    date: 1552132800,
    views: 8065498,
    title: 'Honey Dijon Boiler Room x Sugar Mountain 2018 DJ Set',
    youtubeId: 'm_qewI-1cEs'
  },
  {
    id: 2,
    date: 1628118000,
    views: 182551,
    title: 'Yung Singh | BR London: Yung Singh Pres. Daytimers',
    youtubeId: 'kSpRpBDrIFM'
  },
  {
    id: 3,
    date: 1537570800,
    views: 488649,
    title: 'Carista | Boiler Room x Dekmantel Festival 2018',
    youtubeId: 'GwDWGV9yuzA'
  },
]

const typeDefs = gql`
  type Set {
    id: Int
  }

  type Query {
    sets(filterByTitle: String, sortBy: String): [Set]
  }
`;

const resolvers = {
  Query: {
    sets: (parent, args) => {
      console.log(args)
      // Use filterSetsByTitle and sortSets here
      return sets
    },
  },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});

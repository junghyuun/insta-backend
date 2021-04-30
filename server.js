import { PrismaClient } from ".prisma/client";
import { ApolloServer, gql } from "apollo-server";

const client = new PrismaClient()

const typeDefs = gql`
  type Movie {
    id: Int!
    year: Int!
    title: String!
    genre: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    movies: [Movie]
    movie(id:Int!): Movie
  }

  type Mutation {
    createMovie(title: String!, year: Int!, genre: String): Movie
    deleteMovie(id: Int!): Movie
    updateMovie(id: Int!, year: Int!): Movie
  }
`;

const resolvers = {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_, {id}) => client.movie.findUnique({where: {id}})
  },

  Mutation: {
    createMovie: (_, {year, title, genre}) => 
      client.movie.create({ 
        data: {
          year,
          title,
          genre
        }
      }),
    deleteMovie: (_, {id}) => client.movie.delete({where: {id}}),
    updateMovie: (_, {id, year}) => client.movie.update({ where: {id} , data: {year} })
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(() => console.log("Server is running on http://localhost:4000/"));
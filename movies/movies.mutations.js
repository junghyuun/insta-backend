import client from '../client';

export default {
  Mutation: {
    createMovie: (_, {year, title, genre}) => 
      client.movie.create({ 
        data: {
          year,
          title,
          genre
        }
      }),
    deleteMovie: (_, {id}) => client.movie.delete({ where: {id} }),
    updateMovie: (_, {id, year}) => client.movie.update({ where: {id} , data: {year} })
  }  
}
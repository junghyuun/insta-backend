require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from './schema';

const server = new ApolloServer({
  schema,
  context: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIwMDA1ODIyfQ.sKzL2AvRb1E1kus7rygonkv3rT8vFwux7iDvz-cWnUk"
  }
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => 
    console.log(`Server is running on http://localhost:${PORT}/`)
  );
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dylanalmond.net/wp/graphql",
  cache: new InMemoryCache()
});

export default client;
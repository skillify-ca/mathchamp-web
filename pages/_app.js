import '../styles/globals.css'
import initializeApollo from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = initializeApollo();

  return  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp

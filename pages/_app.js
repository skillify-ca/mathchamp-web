import '../styles/globals.css'
import initializeApollo from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider, useAuth } from "../lib/authContext";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  const client = initializeApollo();

  return  <ApolloProvider client={client}>
    <AuthProvider>
    <ReduxProvider store={store}>

    <Component {...pageProps} />
    </ReduxProvider>  

          </AuthProvider>
  </ApolloProvider>
}

export default MyApp

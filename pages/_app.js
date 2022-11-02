import React from "react";

import '../styles/globals.css'
import initializeApollo from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider, useAuth } from "../lib/authContext";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const client = initializeApollo();

  return  <ApolloProvider client={client}>
    <AuthProvider>
    <ReduxProvider store={store}>
    {Component.auth ? (
              <Auth>{<Component {...pageProps} />}</Auth>
            ) : (
              <Component {...pageProps} />
            )}
    </ReduxProvider>  

          </AuthProvider>
  </ApolloProvider>
}

export default MyApp

function Auth({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (loading) return; // Do nothing while loading
    if (!user) router.push("/welcome"); // If not authenticated, force log in
  }, [user, loading]);

  if (user) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
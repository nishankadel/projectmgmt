import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  HttpLink,
} from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: new HttpLink({
    // uri: "https://gqlprojectmgmt.herokuapp.com/graphql",
    uri: "http://localhost:8000/graphql",
  }),
  cache: cache,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

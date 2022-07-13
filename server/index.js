const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
require("./db/connection");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env.local" });

import "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { ClientResolver } from "./Resolvers/ClientResolver";

async function main() {
  console.log(process.env.MONGODB_API);
  const schema = await buildSchema({
    resolvers: [ClientResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.ggl"),
  });
  const server = new ApolloServer({
    schema,
  });
  const { url } = await server.listen();
  console.log("server running on" + url);
}

main();

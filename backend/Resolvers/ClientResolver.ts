import { Arg, Query, Resolver } from "type-graphql";
import { Client } from "../models/Clients";
import { ClientMongo } from "../mongodb/models/Client";

@Resolver()
export class ClientResolver {
  @Query(() => [Client])
  async clients() {
    return await ClientMongo.find();
  }
  @Query(() => Client)
  async createClient(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("cpf") cpf: string,
    @Arg("address") address: string,
    @Arg("phone") phone: string
  ) {}
}

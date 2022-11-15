import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateClientInput, EditClientInput } from "../inputs/Clientinput";
import { Client } from "../models/Clients";
import { ClientMongo } from "../mongodb/models/Client";

@Resolver()
export class ClientResolver {
  @Query(() => [Client])
  async clients() {
    return await ClientMongo.find();
  }

  @Query(() => Client)
  async client(@Arg("id") id: string) {
    return await ClientMongo.findOne({ _id: id });
  }

  @Mutation(() => Client)
  async createClient(
    @Arg("createClientObject") createClientObject: CreateClientInput
  ) {
    const { name, address, cpf, email, phone } = createClientObject;
    return await ClientMongo.create({
      name,
      address,
      cpf,
      email,
      phone,
    });
  }

  @Mutation(() => Client)
  async editClient(@Arg("editClientObject") EditClientObject: EditClientInput) {
    const client = { ...EditClientObject };

    await ClientMongo.updateOne({ _id: client.id }, client);
    return client;
  }
}

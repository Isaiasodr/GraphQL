import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Client {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  email: string;

  @Field()
  address: string;

  @Field()
  phone: string;
}

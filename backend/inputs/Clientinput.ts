import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateClientInput {
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
@InputType()
export class EditClientInput {
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

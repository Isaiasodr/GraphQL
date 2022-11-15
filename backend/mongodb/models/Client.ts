const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  cpf: String,
  email: String,
  address: String,
  phone: String,
});
export const ClientMongo = mongoose.model("Client", schema);

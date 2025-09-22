const registrationSchema = require("../model/registrationSchema");

let usersController = async (req, res) => {
  //console.log("Hi usersController");

//find dia databse theke ja ja data ache ta sob ana jai.&
//findOne dia nirdishto id or user ar data nia asha jai.
//
  //let data = await registrationSchema.find({});
  //let data = await registrationSchema.findOne({username:"adiba"});
  let data = await registrationSchema.findByIdAndUpdate();
  console.log("ami database theke data anlam postman a")
  res.send(data);
};

module.exports = usersController;

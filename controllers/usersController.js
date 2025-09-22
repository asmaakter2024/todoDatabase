const registrationSchema = require("../model/registrationSchema");

let usersController = async (req, res) => {
  //console.log("Hi usersController");

//find dia databse theke ja ja data ache ta sob ana jai. ta array r moddhe object akare data dibe &
//findOne dia nirdishto id or user ar data nia asha jai. ata object akare data dibe.
//
  //let data = await registrationSchema.find({});
  //let data = await registrationSchema.findOne({username:"adiba"});
  // let data = await registrationSchema.findByIdAndUpdate({_id: "68d11ca7d5275e3b8f9f1631"},{username:"ashikur rahman abid"},{new:true});

  let data = await registrationSchema.findByIdAndDelete({_id: "68d11ca7d5275e3b8f9f1631"});
  console.log("ami database theke data anlam postman a")
  res.send(data);
};

module.exports = usersController;

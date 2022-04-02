const mongoose = require("mongoose");

module.exports = async () => {
  return await mongoose.connect("mongodb+srv://dishu:qwerty123456@evaluation.ubmpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};
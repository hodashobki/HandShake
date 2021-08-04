const Message=require("../models/message.model");
module.exports.findAllMsg = (req, res) => {
    Message.find()
      .then(allmsg => res.json({ msgs: allmsg }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  module.exports.createNewMsg = (req, res) => {
    Message.create(req.body)
      .then(newlyCreatedmsg => res.json({ msg: newlyCreatedmsg}))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
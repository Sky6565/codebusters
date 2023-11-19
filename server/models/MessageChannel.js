const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const messageChannelSchema = new mongoose.Schema({
  user1: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  user2: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },
  ],
});

// Using "export" is the same as using "module.exports"
export const MessageChannel = mongoose.model(
  "MessageChannel",
  messageChannelSchema
);

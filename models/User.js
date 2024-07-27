const { Schema, model } = require('mongoose');

// * username
//     * String
//     * Unique
//     * Required
//     * Trimmed
// * email
//     * String
//     * Required
//     * Unique
//     * Must match a valid email address (look into Mongoose's matching validation)
// * thoughts
//     * Array of _id values referencing the Thought model
// * friends
//     * Array of _id values referencing the User model (self-reference)

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "thought"
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "user"
    }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;

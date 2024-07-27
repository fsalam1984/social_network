const { Schema, model } = require('mongoose');
const dayjs = require("dayjs")
const reactionSchema = require("./Reaction")

// * thoughtText
//     * String
//     * Required
//     * Must be between 1 and 280 characters
// * createdAt
//     * Date
//     * Set default value to the current timestamp
//     * Use a getter method to format the timestamp on query
// * username (The user that created this thought)
//     * String
//     * Required
// * reactions (These are like replies)
//     * Array of nested documents created with the reactionSchema


// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,

    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        const formattedTimestamp = dayjs(timestamp).format("MM/DD/YYYY");
        return formattedTimestamp;
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
)



const Thought = model('thought', thoughtSchema);

module.exports = Thought;

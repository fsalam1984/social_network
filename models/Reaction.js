const { Schema, model, Types } = require('mongoose');
const dayjs = require("dayjs")

// * reactionId
//     * Use Mongoose's ObjectId data type
//     * Default value is set to a new ObjectId
// * reactionBody
//     * String
//     * Required
//     * 280 character maximum
// * username
//     * String
//     * Required
// * createdAt
//     * Date
//     * Set default value to the current timestamp
//     * Use a getter method to format the timestamp on query


// Schema to create a course model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,

    },

    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        const formattedTimestamp = dayjs(timestamp).format("MM/DD/YYYY");
        return formattedTimestamp;
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
// const Reaction = model('reaction', reactionSchema);
// Create a virtual property `upvoteCount` that gets the amount of comments per user
// reactionSchema
//   .virtual('reactionCount')
//   // Getter
//   .get(function () {
//     return this.meta.upvotes;
//   });

// const Reaction = model('post', reactionSchema)  
// module.exports = Reaction;

// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;
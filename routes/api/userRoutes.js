const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router.route('/:userId')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);

  // /api/users/:userId/friends/:friendId
  // POST to add a new friend to a user's friend list
  // DELETE to remove a friend from a user's friend list

  router.route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend)


module.exports = router;

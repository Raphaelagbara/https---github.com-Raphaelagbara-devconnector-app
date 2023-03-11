const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");
//@route GET api/auth
//@desc Get user by token
//@access private

router.get("/", auth, function (req, res) {
  res.json({
    message: "Hello from auth",
  });
});

module.exports = router;

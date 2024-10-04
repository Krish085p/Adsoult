const express = require("express");
const router = express.Router();
const usercont = require('../controllers/User');


router.post('/createusers', usercont.usercreate);
router.get('/searchusers/:id', usercont.searchUser ); 
router.delete('/deleteusers/:id', usercont.deleteUser);

module.exports = router;
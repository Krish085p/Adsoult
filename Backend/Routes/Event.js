const express = require("express");
const router = express.Router();
const eventcont = require('../controllers/Event');

router.post('/createvent', eventcont.createEvent); 
router.get('/searchevent', eventcont.searchevent);
router.delete('/deletevent/:id', eventcont.deleteEvent); 


module.exports = router;

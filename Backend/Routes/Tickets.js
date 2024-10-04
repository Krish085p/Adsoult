const express = require("express");
const router = express.Router();
const ticketcont = require('../controllers/Ticket');


router.post('/createticket', ticketcont.createTicket);
router.get('/searchticket/:id', ticketcont.searchTicket);


module.exports = router;

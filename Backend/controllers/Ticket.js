const Ticket = require('../models/Ticket');

const createTicket = async (req, res) => {
    const { event, seatNumber, price } = req.body;
    try {
      const ticket = new Ticket({ event, seatNumber, price });
      await ticket.save();
      res.status(201).json(ticket);
    } catch (error) {
      res.status(400).json({ message: 'Error creating ticket', error });
    }
  }

const searchTicket = async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id).populate('event bookedBy');
      if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
      res.json(ticket);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching ticket', error });
    }
  }

module.exports = {createTicket, searchTicket};
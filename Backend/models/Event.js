const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, // Use String to store time in 'HH:MM' format or any format you prefer
    required: true,
  },
  category: {
    type: String,
    enum: ['Concert', 'Conference', 'Theater', 'Sport', 'Other'],
    default: 'Other',
  },
  ticketsAvailable: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;

const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema(
  {
    streetAddress: {
      type: String,
      required: [true, "Please enter the street address"],
    },
    city: {
      type: String,
      required: [true, "Please enter the city"],
    },
    state: {
      type: String,
      required: [true, "Please enter the state"],
    },
    zipcode: {
      type: String,
      required: [true, "Please enter the zipcode"],
    },
    coordinates: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number], // Define as an array of numbers
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Address', AddressSchema);


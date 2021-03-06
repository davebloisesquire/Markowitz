const mongoose = require('mongoose');

const { Schema } = mongoose;

const stockSchema = new Schema({
    symbol: {
        type: String,
        required: true,
        trim: true
    },
    closingPrice: {
        type: Number,
        required: false,
        trim: true
    },
    previousClose: {
        type: Number,
        required: false,
        trim: true
    },
    priceHistory: [Number],
    dateLabels: [String],
    dailyReturns: [Number],
    meanReturn: { type: Number }
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
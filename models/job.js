const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    experienceRequired: {
        type: Number,
        default: 0
    }
});


module.exports = mongoose.model("Job", jobSchema);
const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Movie title is required"
        ]
    }, 
    rating: {
        type: Number, 
        require: [true, "Movie rating is required"]
    },
    review: {
        type: String, 
        require: [false, "Movie review/log is required"]
    },
    status: {
        type: String,
        enum: ["To Watch", "Watching", "Watched"],
        // enum (Enumeration)= List of allowed values 
        default: "To Watch"
    },
    genre: {
        type: String, 
        enum: ["Romance", "Sci-Fi", "Horror"],
        required: [true, "Please Select a genre: Romance, Sci-Fi, Horror"]
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

mongoose.exports = mongoose.model("Movies", moviesSchema);
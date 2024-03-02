import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
    match: /[\w\s]+/, //поле має задовольняти регулярному виразу
  },
  author: {
    type: String,
    required: true, 
  },
  genre: {
    type: String,
    enum: [ //одне з декількох варіантів
      "Action",
      "Biography",
      "History",
      "Horror",
      "Kids",
      "Learning",
      "Sci-Fi",
    ],
    default: "Action",
  },
  year: {
    type: Number,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);  
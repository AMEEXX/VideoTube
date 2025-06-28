import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2" 
const videoSchema = new mongoose.Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videoFIle: {
      type: String, //cloudniry,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    tile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String, //cloudniry,
      required: true,
    },
    duration: {
      type: Number, // cloudniry send this all the info
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    views: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)t videoSchema.plugin(mongooseAggregatePaginate)



export const Video = mongoose.model("Video"t videoSchema);

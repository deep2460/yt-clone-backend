import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFileL: {
            type: String, //cloudnary url
            required: true,
        },
        thumbnail: {        // cloudnary
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {      //cloudnary
            type: Number,
            required: true
        },
        views: {      //cloudnary
            type: Number,
            default: 0
        },
        isPublished: {      //cloudnary
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamp: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)
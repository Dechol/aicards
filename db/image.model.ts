import { Schema, models, model, Document } from "mongoose";

// export interface iImage extends Document {
//   author: Schema.Types.ObjectId;
//   question: Schema.Types.ObjectId;
//   content: string;
//   upvotes: Schema.Types.ObjectId[];
//   downvotes: Schema.Types.ObjectId[];
//   createdAt: Date;
// }

const ImageSchema = new Schema({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String
    }
});

const Image = models.Image || model("Image", ImageSchema);

export default Image;

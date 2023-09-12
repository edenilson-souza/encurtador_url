import mongoose, { Schema, Document } from "mongoose";

export interface ILink extends Document {
    originalUrl: string;
    shortUrl: string;
    createdAt: Date;
}

const linkSchema: Schema = new Schema(
    {
        originalUrl: { type: String, required: true },
        shortUrl: { type: String, required: true, unique: true },
        createdAt: { type: Date, default: Date.now }
    },
    { collection: "links" }
);

export default mongoose.model<ILink>("Link", linkSchema);

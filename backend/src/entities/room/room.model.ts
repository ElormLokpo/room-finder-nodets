import mongoose from "mongoose"
import { RoomInterface } from "./room.types";
import {v4} from "uuid"

const RoomSchema = new mongoose.Schema({
    _id:{
        type:String,
    
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    currency: {type:String}, 
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    amenities: [{ type: String }],
    images: [{ type: String }], 
    owner: { type: String, ref: 'UserModel', required: true },
    availableDates: [{ type: Date }],
});

RoomSchema.pre("save", async function(){
    this._id = v4();
})
 

export const RoomModel = mongoose.model<Document>("RoomModel", RoomSchema);
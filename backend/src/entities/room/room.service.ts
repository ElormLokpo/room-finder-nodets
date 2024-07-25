import { RoomModel } from "./room.model";
import { RoomInterface } from "./room.types";
import { ResponseType } from "../../entities/types";

export const addRoomService = async (room: RoomInterface)=>{
    const room_mutation = await RoomModel.create(room);

    const response:ResponseType<any> = {
        success:true,
        message:"Room added successfully",
        data: room_mutation

    };

}

export const getAllRoomsService = async ()=>{
    const room_query = await RoomModel.find();

    const response:ResponseType<any> = {
        success:true,
        message:"Room added successfully",
        data: room_query

    };
}


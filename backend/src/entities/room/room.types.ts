export interface RoomInterface{
    id:string,
    title: string;
  description: string;
  pricePerNight: number;
  currency:string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  amenities: string[];
  images: string[];
  owner: string; 
  availableDates: Date[];
}
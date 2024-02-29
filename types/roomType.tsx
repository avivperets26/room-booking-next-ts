export interface RoomImage {
  url: string;
}
export interface MonthlyPricing {
  name: string;
  months: number;
  amount: string;
}
export interface RoomPricing {
  minimumPrice: number;
  monthlyPricing: MonthlyPricing[];
}

export interface RoomAddress {
  fullAddress: string;
  streetAddress: string;
  city: string;
  stateCode: string;
}

export interface Room {
  id: number;
  address: RoomAddress;
  images: RoomImage[];
  availableDate: string;
  pricing: RoomPricing;
}

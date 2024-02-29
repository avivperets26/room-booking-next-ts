import React from "react";
import { Room } from "../../types/roomType";
import { formatPrice } from "@/helpers/Helpers";
import { useRouter } from "next/router";
type RoomCardProps = {
  room: Room;
};

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const router = useRouter();
  const amount = room.pricing.monthlyPricing[0]?.amount;

  const handleBookClick = () => {
    // Navigate to the booking page for this room
    router.push(`/booking/${room.id}`);
  };

  return (
    <div className="room">
      <img
        src={room.images[0].url || "placeholder-image-url.jpg"}
        alt="Room Image"
        className="room-image"
      />
      <div className="room-info">
        <div className="room-description">
          <h2>
            {room.address.streetAddress},{room.address.city},
            {room.address.stateCode}
          </h2>
          <p className="room-available">Available: {room.availableDate}</p>
          <p className="room-price">
            Price: {formatPrice(amount) || "N/A"}€ {}
          </p>
        </div>
        <button onClick={handleBookClick} className="book-button">
          Book
        </button>
      </div>
    </div>
  );
};
export default RoomCard;

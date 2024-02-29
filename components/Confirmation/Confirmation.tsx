import { selectRoomById } from "@/store/roomsSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import SpinnerSvg from "@/svg/SpinnerSvg";

interface ConfirmationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const Confirmation: React.FC<ConfirmationProps> = ({
  onPrevious,
  onNext,
}) => {
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const router = useRouter();
  const { roomId } = router.query; // Extract bookingId from the query
  const bookingIdStr = Array.isArray(roomId) ? roomId[0] : roomId;
  const room = useSelector((state: RootState) =>
    bookingIdStr ? selectRoomById(state, bookingIdStr) : null
  );

  if (!room) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SpinnerSvg />
      </div>
    );
  }

  const handleCancel = () => {
    // Navigate to the homepage or perform any other desired action
    window.location.href = "/";
  };
  return (
    <div className="confirmation">
      <h2>Confirmation</h2>
      <div className="room-details">
        <p>
          <strong>Address:</strong> {room.address.fullAddress}
        </p>
        <p>
          <strong>Available Date:</strong> {room.availableDate}
        </p>
        <p>
          <strong>Price:</strong> ${room.pricing.monthlyPricing[0].amount} /
          month for {room.pricing.monthlyPricing[0].months} months
        </p>
      </div>
      <div className="confirmation-check">
        <input
          type="checkbox"
          id="confirmCheck"
          checked={isConfirmed}
          onChange={() => setIsConfirmed(!isConfirmed)}
        />
        <label htmlFor="confirmCheck">
          I confirm the information is correct
        </label>
      </div>
      <div className="actions">
        <Button type="cancel" onClick={handleCancel} />
        <div className="next-previous-buttons">
          <Button onClick={onPrevious} type="previous" />
          <Button onClick={onNext} type="next" disabled={!isConfirmed} />
        </div>
      </div>
    </div>
  );
};

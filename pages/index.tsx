import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomCard from "@/components/RoomCard/RoomCard";
import { fetchRooms } from "../store/roomsSlice";
import type { AppDispatch, RootState } from "../store/store"; // Import RootState for useSelector
import SpinnerSvg from "@/svg/SpinnerSvg";
import Button from "@/components/Button/Button";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

  // Pagination Handling
  const [currentPage, setCurrentPage] = useState(1);

  const roomsPerPage = 8;
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;

  // Access loading state and error message from the Redux store
  const rooms = useSelector((state: RootState) => state.rooms.items);
  const status = useSelector((state: RootState) => state.rooms.status);
  const error = useSelector((state: RootState) => state.rooms.error);

  useEffect(() => {
    dispatch(fetchRooms({ page: currentPage, pageSize: roomsPerPage }));
  }, [dispatch, currentPage, roomsPerPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="main-title">
        <h1>
          Your <span>Next</span> Apartment
        </h1>
      </div>
      {status === "loading" ? (
        <div className="flex items-center justify-center h-screen">
          <SpinnerSvg />
        </div>
      ) : (
        <>
          <div className="room-list">
            {rooms.slice(indexOfFirstRoom, indexOfLastRoom).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="pagination-buttons">
            <Button
              type="previous"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
            <Button
              type="next"
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastRoom >= rooms.length}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;

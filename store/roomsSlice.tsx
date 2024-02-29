import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Room } from "@/types/roomType";
import { RootState } from "./store";

export interface RoomState {
  items: Room[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
  page: number;
  pageSize: number;
}

// Initial state
const initialState: RoomState = {
  items: [],
  status: "idle",
  error: null,
  page: 1,
  pageSize: 8,
};
interface FetchRoomsParams {
  page: number;
  pageSize: number;
}

// Asynchronously fetch rooms
export const fetchRooms = createAsyncThunk<Room[], FetchRoomsParams>(
  "rooms/fetchRooms",
  async ({ page, pageSize }) => {
    const res = await fetch(
      `https://www.common.com/cmn-api/listings/common?page=${page}&pageSize=${pageSize}`
    );
    const data: Room[] = await res.json();
    return data;
  }
);

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRooms.fulfilled, (state, action: PayloadAction<Room[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectRoomById = (
  state: RootState,
  roomId: string
): Room | undefined => {
  return state.rooms.items.find((room) => room.id.toString() === roomId);
};
export default roomsSlice.reducer;

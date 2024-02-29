import * as slice from "./roomsSlice";

beforeEach(() => {
  (global as any).fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve([]),
  }) as jest.MockedFunction<typeof fetch>;
});

describe("fetchRooms async thunk", () => {
  it("dispatches the correct actions on fetch success", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    await slice.fetchRooms({ page: 1, pageSize: 8 })(
      dispatch,
      getState,
      undefined
    );

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: "rooms/fetchRooms/pending" })
    );
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: "rooms/fetchRooms/fulfilled" })
    );
    expect(fetch).toHaveBeenCalledWith(
      "https://www.common.com/cmn-api/listings/common?page=1&pageSize=8"
    );
  });
});

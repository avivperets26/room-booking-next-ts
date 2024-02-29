import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { FormData } from "../types/formType";

interface FormState {
  data: FormData;
}

const initialState: FormState = {
  data: {
    name: "",
    surname: "",
    age: "",
    profession: "",
    salary: "",
    pets: "",
    maritalStatus: "",
    nationality: "",
    phoneNumber: "",
    passportId: "",
    email: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<FormData>) => {
      state.data = action.payload;
    },
  },
});

export const { updateFormData } = formSlice.actions;

export const selectFormData = (state: RootState) => state.form.data;

export default formSlice.reducer;

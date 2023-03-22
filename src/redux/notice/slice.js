import { createSlice } from "@reduxjs/toolkit";

const state = {
                radio: '',
                title: '',
                name: '',
                date: '',
                breed: '',
                radioSex: '',
                location: '',
                price: '',
                image: '',
                comment: '',
};

export const noticeSlice = createSlice({
  name: "notice",
  initialState: state,
  reducers: {
    addNotice: (state, { payload }) => ({
      ...state,
                radio: payload.radio,
                title: payload.title,
                name: payload.name,
                date: payload.date,
                breed: payload.breed,
                radioSex: payload.radioSex,
                location: payload.location,
                price: payload.price,
                image: payload.image,
                comment: payload.comment,
    }),
    cleanNotice: () => state,
  },
});

export const noticeReducer = noticeSlice.reducer;

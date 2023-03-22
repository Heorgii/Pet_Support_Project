import { createSlice } from "@reduxjs/toolkit";

const state = {
                radio: '',
                title: '',
                name: '',
                date: '',
                breed: '',
                sex: '',
                location: '',
                price: '',
                image: '',
                comments: '',
};

export const noticeSlice = createSlice({
  name: "notice",
  initialState: state,
  reducers: {
    addNotice: (state, { payload }) => ({
      ...state,
                radio: payload.userId,
                title: payload.title,
                name: payload.name,
                date: payload.date,
                breed: payload.breed,
                sex: payload.sex,
                location: payload.location,
                price: payload.price,
                image: payload.image,
                comments: payload.comments,
    }),
    cleanNotice: () => state,
  },
});

export const noticeReducer = noticeSlice.reducer;

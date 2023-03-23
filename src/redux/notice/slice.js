import { createSlice } from "@reduxjs/toolkit";

const state = {
                category: '',
                title: '',
                name: '',
                birthday: '',
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
                category: payload.category,
                title: payload.title,
                name: payload.name,
                birthday: payload.birthday,
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

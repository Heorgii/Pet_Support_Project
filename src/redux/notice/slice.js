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
                imageUrl: '',
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
                birthday: new Date(payload.birthday).toISOString().slice(10),
                breed: payload.breed,
                sex: payload.sex,
                location: payload.location,
                price: payload.price,
                imageUrl: payload.imageUrl,
                comments: payload.comments,
    }),
    cleanNotice: () => state,
  },
});

export const noticeReducer = noticeSlice.reducer;

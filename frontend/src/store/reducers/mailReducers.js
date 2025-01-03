

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api'

export const addSubscription = createAsyncThunk(
  'subscription/addSubscription',
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/subscription', { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const subscriptionSlice = createSlice({
  name: 'mail',
  initialState: {
    loading: false,
    success: null,
    error: null,
  },
  reducers: {
    clearSubscriptionState: (state) => {
      state.loading = false;
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSubscription.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(addSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { clearSubscriptionState } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;

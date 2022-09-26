import { configureStore } from '@reduxjs/toolkit';
import { shazanCoreApi } from './services/shazamCore';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazanCoreApi.reducerPath]: shazanCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazanCoreApi.middleware),
});

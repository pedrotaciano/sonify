import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazanCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => { 
            headers.set('X-RapidAPI-Key', 'adfcfb6209msh4c5fc73dad729d9p1d95cfjsn25d4a9ffb699');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

export const { useGetTopChartsQuery } = shazanCoreApi;
/*
     Creating a RTK Query API 

1.  Identify a group of related requests that your app needs to make
2.  Make a new file that will create the API
3.  The API needs to store a tone of state related to data, request status, errors.  
    Add a 'reducerPath'
4.  The API needs to know how and where to send requests.  Add a 'baseQuery'
5.  Add 'endpoints', one for each kind of request you want to make.  Reqs that 
    read data are queries, reqs that write data are muatations
6.  Export all the automatically generated hooks.
7.  Connect the API to the store.  Reducer, middleware, and listeners
8.  Export the hooks from store/index.js file
9.  Use the generated hooks in a component


*/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005/',
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: '/albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };

/*
  Endpoints

  What's the goal?
  Give a simplified name
  Is this a query or a mutation?
  What's the path for this request, relative to the baseURL?
  What's the query string for this request?
  What's the method for this request?
  What's the body for this request?


*/

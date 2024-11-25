import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const PHOTO_TAG = 'Photo';
const ALBUMS_PHOTOS_TAG = 'AlbumsPhotos';

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return { type: PHOTO_TAG, id: photo.id };
          });
          tags.push({ type: ALBUMS_PHOTOS_TAG, id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id,
            },
            method: 'GET',
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (results, error, album) => {
          return [{ type: ALBUMS_PHOTOS_TAG, id: album.id }];
        },
        query: (album) => {
          return {
            method: 'POST',
            url: '/photos',
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (results, error, photo) => {
          return [{ type: PHOTO_TAG, id: photo.id }];
        },
        query: (photo) => {
          return {
            method: 'DELETE',
            url: `/photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;

export { photosApi };

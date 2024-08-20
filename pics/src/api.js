import axios from 'axios';

const unSplashURL = 'https://api.unsplash.com';
const searchPhotosSubURL = '/search/photos';
const personalUnsplashApiKey = 'NR8jFDe51rT42FkWk4Vbj9WxP8iUJhq5XOq6j95Cq3c';
const genericUnsplashApiKey = '8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y';

const searchImages = async (queryTerm) => {
  const response = await axios.get(unSplashURL + searchPhotosSubURL, {
    headers: {
      Authorization: 'Client-ID ' + personalUnsplashApiKey,
    },
    params: {
      query: queryTerm,
    },
  });

  return response.data.results;
};

export default searchImages;

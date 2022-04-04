import axios from 'axios';

export const options = { pageNumber: 1, pageItemCount: 40 };

async function imgItems(namePhoto) {
  const SEARCH_URL = 'https://pixabay.com/api/';
  const params = {
    params: {
      key: '26519972-c91dee9f0b7b4c5b94268929b',
      q: namePhoto,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: options.pageNumber,
      per_page: options.pageItemCount,
    },
  };

  const { data } = await axios.get(SEARCH_URL, params);
  return data;
}
export { imgItems };

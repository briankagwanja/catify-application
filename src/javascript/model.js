import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  catPic: {},
};

export const loadCat = async function () {
  try {
    const data = await getJSON(API_URL);

    const cat = data[0];
    console.log(cat);

    state.catPic = {
      id: cat.id,
      imgUrl: cat.url,
    };

    console.log(state.catPic);
  } catch (err) {
    throw err;
  }
};

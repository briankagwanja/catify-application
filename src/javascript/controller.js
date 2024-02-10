import * as model from './model.js';
import view from './view.js';

const catContainer = document.querySelector('.anime__pic');

const controlCats = async function () {
  try {
    // load the cat
    await model.loadCat();

    //render the cat
    view.render(model.state.catPic);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  view.addHandlerRender(controlCats);
};

init();

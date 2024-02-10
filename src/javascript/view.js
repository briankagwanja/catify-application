class View {
  _data;
  _parentElement = document.querySelector('.anime__pic');
  _loadBtn = document.querySelector('.btn__load');

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    console.log(this._data.imgUrl);
    return `
    <img src="${this._data.imgUrl}" alt="Image" class="anime__image" />
    `;
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  addHandlerRender(handler) {
    this._loadBtn.addEventListener('click', handler);
  }
}

export default new View();

class Application {
  constructor() {
    this._btnTop = document.querySelector('.btn__back-top');
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(evt) {
    if (pageYOffset > 599) {
      this._btnTop.classList.add('active')
    } else {
      this._btnTop.classList.remove('active');
    }
  }
}

module.exports = Application;

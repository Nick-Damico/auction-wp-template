class Navigation {
  constructor() {
    this.navEl = document.querySelector('#navBtn');
    this.navEl.addEventListener('click', evt => this.toggleNav(evt));
  }

  toggleNav(evt) {
    const expanded = evt.target.getAttribute('aria-expanded') === 'true' || false;
    evt.target.setAttribute('aria-expanded', !expanded);
  }


};

module.exports = Navigation;

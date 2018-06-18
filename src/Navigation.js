class Navigation {
  constructor() {
    this.navEl = document.querySelector('#navBtn');
    this.navEl.addEventListener('click', this.toggleNav);
  }

  toggleNav(evt) {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    // Toggle Class to animate hamburger Icon to 'open' and 'close' state.
    this.classList.toggle('open');
  }

};

module.exports = Navigation;

class Navigation {
  constructor() {
    this.navEl = document.querySelector('#navBtn');
    this.navEl.addEventListener('click', this.toggleNav);
    window.addEventListener('resize', this.closeNav.bind(this));
  }

  toggleNav(evt) {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    // Toggle Class to animate hamburger Icon to 'open' and 'close' state.
    this.classList.toggle('open');
    if (this.getAttribute('aria-expanded')) {
      document.body.style.overflowY = 'hidden';
    } else {
      console.log('closed');
      document.body.style.overflowY = 'initial';
    }
  }

  closeNav(evt) {
    const currentWidth = evt.currentTarget.innerWidth;
    if (currentWidth > 565) {
      this.navEl.setAttribute('aria-expanded', false);
      this.navEl.classList.remove('open');
    }
  }

};

module.exports = Navigation;

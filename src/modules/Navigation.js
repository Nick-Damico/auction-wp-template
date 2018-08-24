class Navigation {
  constructor() {
    this.navEl = document.querySelector('#navBtn');
    this.navEl.addEventListener('click', this.toggleNav.bind(this));
    window.addEventListener('resize', this.closeNav.bind(this));
    this.state = {
      open: false
    }
  }

  toggleNav(evt) {
    this.state.open = !this.state.open;
    this.navEl.setAttribute('aria-expanded', this.state.open);
    // Toggle Class to animate hamburger Icon to 'open' and 'close' state.
    this.navEl.classList.toggle('open');
    if (this.state.open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';    
    }
  }

  closeNav(evt) {
    const currentWidth = evt.currentTarget.innerWidth;
    if (currentWidth > 565) {
      this.state.open = false;
      this.navEl.setAttribute('aria-expanded', this.state.open);
      this.navEl.classList.remove('open');
      document.body.style.overflowY = 'initial';
    }
  }

};

module.exports = Navigation;

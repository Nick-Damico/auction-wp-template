class SignupForm {
  constructor(form, response) {
    this.emailSignup = jQuery(`${form}`);
    this.responseOutput = jQuery(`${response}`);
    this.emailSignup.on('click', this.hideOnTimeout.bind(this));
  }

  hideOnTimeout() {
    const hideInterval = setInterval(() => {
      this.responseOutput.slideUp(function() {
        clearInterval(hideInterval);
      });
    }, 6000);
  }

}

module.exports = SignupForm;

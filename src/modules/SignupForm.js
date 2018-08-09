class SignupForm {
  constructor() {
    this.emailSignup = jQuery('.wpcf7-submit');
    this.responseOutput = jQuery('.wpcf7-response-output');
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

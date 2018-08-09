
class SignupForm {
  constructor() {
    this.emailSignup = jQuery('.wpcf7-submit');
    this.emailSignup.on('click', this.hideOnTimeout);
  }

  hideOnTimeout() {
    const responseOutput = jQuery('.wpcf7-response-output');
    const hideInterval = setInterval(function() {
      responseOutput.slideUp(function() {
        clearInterval(hideInterval);
      });
    }, 6000);
  }

}

module.exports = SignupForm;

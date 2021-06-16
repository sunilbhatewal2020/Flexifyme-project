// Customer Sign UP start

// validate signup form on keyup and submit
$(function () {  
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='contactForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      fullname: "required",     
      phone: {
        required: true,
        number: true,
        maxlength: 11
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      },

    },
    // Specify validation error messages
    messages: {
      fullname: "Please enter your first name",      
      phone: "please enter phone number without dashes",
      email: "Please enter a valid email address",
      message: "Please enter your message"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      $('.error').removeClass('show');
      $('.waiting').addClass('show');
      openModal();
      $.ajax({
        type: "POST",
        url: "send_form_email.php",
        data: $('#contactForm').serialize(),
        success: function (response) {
          closeModal();
          $('.waiting').removeClass('show');
          $('.success').addClass('show');

          $('#contactForm')[0].reset();
          if (response === 1) {
            $('.waiting').removeClass('show');
            $('.success').addClass('show');
            $('#contactForm')[0].reset();
            /*$('#contactForm').validator.resetForm();*/

          }
          setTimeout(function () {
            $('.success').removeClass('show');
          }, 1500);
        }
      });
      return false; // required to block normal submit since you used ajax
    }
  });
});

function openModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
}

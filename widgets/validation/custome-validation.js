$(document).ready(function () {
  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email_id: {
        required: true,
        email: true,
      },
      ph_no: {
        required: true,
        digits: true,
        minlength: 6,
      },
      company: "required",
      message: "required",
    },
    messages: {
      name: {
        required: "Please Enter Full Name",
        minlenght: "Please Enter At Least 2 Character",
      },
      email_id: {
        required: "Please Enter Email ID",
        email: "Please Enter Email ID",
      },
      ph_no: {
        required: "Please Enter Phone No",
        digits: "Please Enter Digit Only",
        minlenght: "Please Enter At Least 6 Number",
      },
      company: "Please Enter Compnay Name",
      message: "Please Enter Message",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });

  // register-form

  $("#register-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      designation: "required",
      company: "required",
      email_id: {
        required: true,
        email: true,
      },
      ph_no: {
        required: true,
        digits: true,
        minlength: 6,
      },      
      attending: "required",
    },
    messages: {
      name: {
        required: "Please Enter Full Name",
        minlenght: "Please Enter At Least 2 Character",
      },
      designation: "Please Enter Designation",
      company: "Please Enter Compnay Name",
      email_id: {
        required: "Please Enter Email ID",
        email: "Please Enter Email ID",
      },
      ph_no: {
        required: "Please Enter Phone No",
        digits: "Please Enter Digit Only",
        minlenght: "Please Enter At Least 6 Number",
      },
      
      attending: "Please Select Option",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});

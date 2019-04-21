jQuery.validator.addMethod("checkMask", function(value, element) {
     return /\d{1}\s\d{3}\s\d{3}\s\d{2}\s\d{2}/g.test(value);
});

$('form').validate({
  rules: {
    phonenumber: {
      checkMask: true
    }
  },
  messages: {
    ph: {
      checkMask: "Введите полный номер телефона"
    }
  }
});
$('.user-number').mask("9 999 999 99 99", {autoclear: false});

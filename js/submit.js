
function check() {
  var pole1 = document.getElementById('user-login'),
      pole2 = document.getElementById('userNumber');
      pole3 = document.getElementById('userFirm');
  document.getElementById('userButton').disabled = pole1.value && pole2.value && pole3.value ? false : "disabled";}

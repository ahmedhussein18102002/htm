window.onload = pageLoad;
function pageLoad() {
  var Form = document.getElementById("Form");
  Form.onsubmit = validate;
}
function validate() {
  var check = true;
  var Fname = document.getElementById("fname").value;
  var Lname = document.getElementById("lname").value;
  var mail = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;


  
  if (!Fname.match(/^[A-Za-z ]+$/)) {
    alert("only letters or space allowed in name field");
    check = false;
  }
  if (!Lname.match(/^[A-Za-z ]+$/)) {
    alert("only letters or space allowed in name field");
    check = false;
  }
  if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
    alert("Email is Not Valid");
    check = false;
  }
  
  
  if (!phone.match(/^[0-9]{11}$/)) {

    alert("Phone is not valid");
    check = false;
  }
  if (check == true) {
    alert('thanks ' + Fname + " " + Lname + ' for join to us');
    window.location.href = 'index.html';
  }
  return check;
}
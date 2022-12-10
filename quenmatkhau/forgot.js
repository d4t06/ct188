const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

///////////////////////////////////////////////////////////
function checkdn() {
  var email = document.getElementById("email").value;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (email == "") alert("Vui lòng nhập email và password !");
  if (!filter.test(email) || email == "") {
    alert("Email không hợp lệ.");
    email.focus;
    return false;
  } else {
    alert("Đã gửi mật khẩu đến");
    window.open("../trangchu/trangchu.html");
  }
}

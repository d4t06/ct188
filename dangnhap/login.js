var userList = JSON.parse(window.localStorage.getItem("userList"));
console.log(userList);
// ///////////////////////////////////////////////////////////

function checkdn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var userLogIn = userList.find(function (user) {
    return user.email === email;
  });

  if (email == "" && password == "") alert("Vui lòng nhập email và password !");
  if (!filter.test(email) || email == "") {
    alert("Email không hợp lệ.");
    email.focus;
    return false;
  } else if (password == "" || password.length < 8) {
    alert("Password không hợp lệ.");
    return false;
  } else if (userLogIn === undefined) {
    alert("Tài khoản không tồn tại");
    return false;
  } else if (userLogIn.password != password) {
    alert("Sai mật khẩu");
    return false;
  } else {
    alert("Đăng nhập thành công.");
    window.localStorage.setItem("userLogIn", JSON.stringify(userLogIn));
    window.open("../trangchu/trangchu.html");
    return true;
  }
}

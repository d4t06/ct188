const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");


///////////////////////////////////////////////////////////

function checkChange() { 
  var passwordlast = document.getElementById('passwordlast').value; 
  var password= document.getElementById('password').value;
  var password1= document.getElementById('password1').value; 
  if(passwordlast=='' && password=='' && password1=='')
      alert('Vui lòng nhập mật khẩu cũ và mật khẩu mới !')
  if (passwordlast == password) { 
      alert('Mật khẩu mới không được trùng với mật khẩu cũ.');
      email.focus; 
      return false; 
  }
  else if (password=='' || password.length < 8){
      alert('Mật khẩu mới không hợp lệ.');
      return false; 
  }
  else if (password1=='' || password.length < 8 || password1 != password){
      alert('Mật khẩu mới không khớp.');
      return false; 
  }
  else
      alert('Đổi mật khẩu thành công.'); 
} 


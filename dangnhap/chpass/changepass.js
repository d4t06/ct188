function checkchangepass(){
   var passwdc = document.getElementById('matkhaucu').value;
   var passwd1 = document.getElementById('matkhaumoi_1').value;
   var passwd2 = document.getElementById('matkhaumoi_2').value;
   if(passwdc=="" || passwdc.length < 8){
    alert("Mật khẩu cũ bị sai hoặc bị thiếu");
    return false;
   }
   else if(passwd1=="" || passwd1.length < 8){
    alert("Mật khẩu mới không hợp lệ");
    return false;
   }
   else if(passwd2=="" || passwd2.length < 8 || passwd2 != passwd1){
    alert("Mật khẩu mới không khớp");
    return false;
   }
   else{
    alert("chúc mừng bạn đã đổi mật khẩu thành công!")
   }
}
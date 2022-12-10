var userList = [];

function User(hoten, email, password){
    this.hoten = hoten;
    this.email = email;
    this.password = password;
}

// Dang Ky
function checkdk() {
    var hoten = document.getElementById('hoten').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password1 = document.getElementById('password1').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == '' && password == '' && password1 == '')
        alert('Vui lòng nhập email và password !');
    if (hoten = '') {
        alert('Nhập họ tên');
        return false;
    }
    if (!filter.test(email) || email == '') {
        alert('Email không hợp lệ.');
        email.focus;
        return false;
    }
    if (userList.find(function(user) {
        return user.email === email
    }) !== undefined){
        alert('Email đã tồn tại');
        email.focus;
        return false;
    }
    else if (password == '' || password.length < 8) {
        alert('Password không hợp lệ.');
        return false;
    }
    else if (password1 == '' || password.length < 8 || password1 != password) {
        alert('Password không khớp.');
        return false;
    }
    else {
        var user1 = new User(hoten, email, password);
        userList.push(user1);
        window.localStorage.setItem('userList', JSON.stringify(userList));
        alert('Đăng ký thành công.');
        return true;
    }
}


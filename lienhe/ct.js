function checkcontact(){
    var yname = document.getElementById('yten').value;
    var ymail = document.getElementById('ymail').value;
    var ytel = document.getElementById('ytel').value;
    if(yname ==""){
        alert("Vui lòng để lại tên của bạn!");
        return false;
    }
    else if(ymail==""){
        alert("Vui lòng để lại email của bạn!");
        return false;
    }
    else if(ytel==""){
        alert("vui lòng để lại số điện thoại của bạn!");
    }
    else{
        alert("Cảm ơn bạn đã liên hệ với chúng tôi, chúng tối sẽ cho bạn phản hồi sớm nhất có thể!")
    }
}
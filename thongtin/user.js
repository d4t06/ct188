var useLogIn = JSON.parse(window.localStorage.getItem('userLogIn'));
console.log(useLogIn);
var hoten = document.getElementById("name");
document.getElementById("email").value = useLogIn.email;
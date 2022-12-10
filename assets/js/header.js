window.onload = function () {
  if (window.localStorage.hasOwnProperty("userLogIn")) {
    var infor = document.querySelector(".navbar-nav>.nav-item:nth-child(3)");
    infor.innerHTML = `<a class="nav-link" href="../thongtin/user.html">Thông tin</a>`;
    var changePass = document.querySelector(
      ".navbar-nav>.nav-item:nth-child(4)"
    );
    console.log(changePass);
    changePass.innerHTML = `<a class="nav-link" href="../doimatkhau/changepass.html">Đổi mật khẩu</a>`;
    var logOut = document.querySelector(".navbar-nav>.nav-item:nth-child(5)");
    logOut.innerHTML = `<a class="nav-link" href="#" onclick="out()">Đăng xuất</a>`;
  }
};

//log out
function out() {
  window.localStorage.removeItem("userLogIn");
  var dn = document.querySelector(".navbar-nav>.nav-item:nth-child(3)");
  var dk = document.querySelector(".navbar-nav>.nav-item:nth-child(4)");
  var changePass = document.querySelector(".navbar-nav>.nav-item:nth-child(5)");
  changePass.innerHTML = "";
  dn.innerHTML = `<a class="nav-link" href="../dangnhap/login.html">Đăng nhập</a>`;
  dk.innerHTML = `<a class="nav-link" href="../dangky/reg.html">Đăng ký</a>`;
  window.location.reload();
}

// chuc nang search
const products = [
  {
    name: "Apple Watch SE 40mm",
    image: "https://cf.shopee.vn/file/f8ec3b6cd40e8f637116dd6b2c83aed4_tn",
    oldPrice: "8.990.000",
    curPrice: "6990000",
  },
  {
    name: "Apple Watch Seri 3 (GPS)",
    image: "https://cf.shopee.vn/file/218bf6a395307c2414171c7664c0bfb6_tn",
    oldPrice: "6.990.000",
    curPrice: "5990000",
  },
  {
    name: "Apple iPhone 11 64GB",
    image: "https://cf.shopee.vn/file/19db3eddf43e8251af2ba9dd92fedffc_tn",
    oldPrice: "22.000.000",
    curPrice: "12090000",
  },
  {
    name: "Apple iPhone 13 Pro Max",
    image: "https://cf.shopee.vn/file/b107f2e6167adb250100ec4c8d028a57_tn",
    oldPrice: "25.000.000",
    curPrice: "11590000",
  },
  {
    name: "Apple iPhone 13 Mini",
    image: "https://cf.shopee.vn/file/c064423004a37893d1d4b05531da0f33_tn",
    oldPrice: "25.000.000",
    curPrice: "18990000",
  },
  {
    name: "Apple iPhone 13 Pro",
    image: "https://cf.shopee.vn/file/9298e5dfabf929d0a3e76689be0e76fd_tn",
    oldPrice: "25.000.000",
    curPrice: "19990000",
  },
  {
    name: 'Apple MacBook Air 13"',
    image: "https://cf.shopee.vn/file/sg-11134201-22100-7jka5nkyr2iv3c",
    oldPrice: "25.000.000",
    curPrice: "19990000",
  },
  {
    name: 'Apple MacBook Pro 13"',
    image: "https://cf.shopee.vn/file/sg-11134201-22100-e3jk1h5qr2iv8d_tn",
    oldPrice: "25.000.000",
    curPrice: "19990000",
  },
];
const searchList = document.querySelector(".search-list");
const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");
const searchBody = document.querySelector(".search-body");
const searchOverplay = document.querySelector(".search-overplay");
const searchBar = document.querySelector(".search-bar");

function renderSearchProduct(array) {
  var html = "";
  array.map((product) => {
    return (html += `
        <li class="search-item">
                <a href="#" class="search-link">
                  <div class="search-item-img">
                    <img
                      src="${product.image}"
                      alt=""
                    />
                  </div>
                  <h4 class="search-item-name">${product.name}</h4>
                </a>
        </li>
        `);
  });

  searchList.innerHTML = html;
}
function handleShowHide(value) {
  searchContainer.style.display = value;
  searchOverplay.style.display = value;
}
function handleSearch() {
  console.log(searchBar);
  //   console.log(e);
  var inputValue = searchBar.value;
  //   khi do dai lon hon 3 thi thuc hien
  if (inputValue.length >= 3) {
    // neu khong phai ''
    if (!!inputValue) {
      // loc san pham
      var productsFilted = products.filter((product) => {
        return product.name.toUpperCase().includes(inputValue.toUpperCase());
      });
      if (productsFilted.length !== 0) {
        handleShowHide("block", "block");
        renderSearchProduct(productsFilted);
      } else handleShowHide("none");
    }
  } else handleShowHide("none");
}

searchOverplay.onclick = function () {
  handleShowHide("none");
  searchBar.value = "";
};

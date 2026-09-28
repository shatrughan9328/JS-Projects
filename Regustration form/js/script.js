function check() {
  // alert('hey')
  let name = document.getElementById("name").value.trim();
  // alert(name)
  let email = document.getElementById("email").value.trim();
  // alert(email)

  let mobile = document.getElementById("mobile").value.trim();
  // alert(mobile)
  let pname = /^[a-zA-Z ]{3,60}$/;
  let pemail = /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]{1,30}$/;
  let pmobile = /^[0-9+]{10,13}$/;
  if (pname.test(name)) {
    alert("valid name");
  } else {
    alert("invalid name");
    document.getElementById("name").style.border = "1px solid red";
    document.getElementById("name-er").innerHTML = "Invalid Name";
    document.getElementById("name-er").style.color = "red";
  }

  if (pemail.test(email)) {
    alert("valid email");
  } else {
    alert("invalid email");
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("name-email").innerHTML = "Invalid email";
    document.getElementById("name-email").style.color = "red";
  }

  if (pmobile.test(mobile)) {
    alert("valid mobile");
  } else {
    alert("invalid mobile");
    document.getElementById("mobile").style.border = "1px solid red";
    document.getElementById("name-mobile").innerHTML = "Invalid Name";
    document.getElementById("name-mobile").style.color = "red";
  }
}

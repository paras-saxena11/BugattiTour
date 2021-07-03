// MENU BAR
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

function demo()
{
alert("The form was submitted successfully");
}


function getConfirmation() 
{
  var retVal = confirm("Do you want to continue ?");
   if( retVal == true ) {
   return true;
  } 
  else {
    return false;
      }
}

//cookies
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(){
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome back to Bugatti Garage " + user);
  } else {
     user = prompt("Enter name to tour a Bugatti Garage:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
;
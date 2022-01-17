$(document).ready(function() {
  
// a login check function
  var login_check = function() {
    var username = $("#name").val(); 
    var password = $("#password").val();
    var login_screencheck = false;
    
    if (username === "BBaskani" && password === "12345678") {
      $("input").hide();
      $("button").hide();
      
      $("#message_login").append("<h3>Welcome back master!</h3>");
      
      login_screencheck = true;
      
    } else {
      alert("Hatali sifre veya kullanıcı adı.");
    }
  }
// end function  
  
  $("#login").click(login_check);

  
});

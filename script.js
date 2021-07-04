
const parse =JSON.parse(localStorage.getItem('contents'))
var data = null
$("#send").click(function(){
   const fullName =  $("#fullName").val()
   const email =  $("#email").val()
   const phone =  $("#phone").val()
   const message =  $("#message").val()
    data= JSON.stringify({fullName,email,phone,message})
   localStorage.setItem('contents',data)
  
  });

    for(var key in parse){
      $("#info").append('<li> '+ key.toUpperCase() +" : " + parse[key] +'</li>');
    }







let data = null
$("#btn").click(function(){
   const fullName =  $("#fullName").val()
   const email =  $("#email").val()
   const phone =  $("#phone").val()
   const message =  $("#message").val()
    data= JSON.stringify({fullName,email,phone,message})
   localStorage.setItem('contents',data)
   alert(data)
  });


 const x =JSON.parse(localStorage.getItem('contents'))
 

 for(var key in x){
   $("#info").append('<li> '+ key.toUpperCase() +" : " + x[key] +'</li>');
 }
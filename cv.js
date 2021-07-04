
var mycv=null
const cvdata =localStorage.getItem('htmltest')
$("#download").click(function(){
mycv=$('#cv')[0].outerHTML;
localStorage.setItem('htmltest', mycv);


  })
  $("#putin").append("<p>" + cvdata + "</p>");
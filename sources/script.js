$("#change").click(function(){
  $("#change").html("Sim, eu te amo");
  $("#move").show();
  $("#change").off("click");
  $("#change").click(function(){
      alert("Eu também te amo, minha gatinha. Clica no OK abaixo para ver uma musiquinha que me lembra você");
      window.location.href = "https://www.youtube.com/watch?v=Cy1WXsHK7xE";
  });
});

$("#move").hover(function(){
  change();
});

function change()
{
var i = Math.floor(Math.random()*500)+1;
var j = Math.floor(Math.random()*100)+1;
$("#move").css({top: j+'px',left:   i+'px'});
}
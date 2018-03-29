$(document).ready(function(){
	
$("#btn1").click(function(){
		
$("#div2").fadeIn("slow");	
		
$("#btn1").hide("fast");	
		
});
		
$("#div2").click(function(){
	
$("#div3").fadeIn("slow");	
	
});

$("#div3").click(function(){
	
$("#div4").fadeIn("slow");		
	
});
	
$("#div4").click(function(){
	
$("#images").show();

$("#div4,#div3,#div2").text("Happy birthday!");

$("body").css("backgroundImage", "url(images/images.jpg)");
});
	});	
	  
	  
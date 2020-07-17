jQuery(document).ready(function($) {
  $(".theme").click(function() {
	$(".theme").toggleClass("active");
	$("").toggleClass("dark-mode");
	$.cookie("theme", $(".theme").hasClass('active'));
  });

  if ($.cookie("theme") == "true") {
	$(".theme").addClass("active");
	$("body").addClass("dark-mode");
  }
});

function toggledarkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
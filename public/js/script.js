// WORKS - Hide sub menu until clicked
$(".sub-menu").hide(function() {
})

// Fake Menus
$( "#fake-drop-down1" ).click(function() {
  $( "#fake-menu1" ).toggle("slow", function(){
  })
});
$( "#fake-drop-down2" ).click(function() {
  $( "#fake-menu2" ).toggle("slow", function(){
  })
});
// Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#fake-menu1").hide("slow");
});
$(".wrap-menu").click(function(){
  $("#fake-menu2").hide("slow");
});
// Hides the menu when clicking anywhere but inside the drop-down
$("#fake-drop-down1").click(function(e){
  e.stopPropagation();
});
$("#fake-drop-down2").click(function(e){
  e.stopPropagation();
});



// WORKS - Show sub menu 1 when clicked (toggle open and close)
$( "#drop-down1" ).click(function() {
  $( "#sub-menu1" ).toggle("slow", function(){
  })
});

// WORKS - Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#sub-menu1").hide("slow");
});
// WORKS - Hides the menu when clicking anywhere but inside the drop-down
$("#drop-down1").click(function(e){
  e.stopPropagation();
});



// WORKS - Show drop down 2 when clicked
var dropDown2 = function() {
  $("#drop-down-second").show("slow")
}
$(".click-me1").click(dropDown2)
// WORKS - Show sub menu 2 when clicked
$( "#drop-down2" ).click(function() {
  $( "#sub-menu2" ).toggle("slow", function(){
  })
});

// WORKS - Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#sub-menu2").hide("slow");
});
// WORKS - Hides the menu when clicking anywhere but inside the drop-down
$("#drop-down2").click(function(e){
  e.stopPropagation();
});



// Show sub menu 3
var dropDown3 = function() {
  $("#drop-down-third").show("slow")
}
$(".click-me2").click(dropDown3)
// WORKS - Show sub menu 3 when clicked
$( "#drop-down3" ).click(function() {
  $( "#sub-menu3" ).toggle("slow", function(){
  })
});



// WORKS - Show sub menu 4
var newRow = function() {
  $("#drop-down-fourth").show("slow")
}
$(".click-me1").click(newRow)
// WORKS - Show sub menu 3 when clicked
$( "#drop-down4" ).click(function() {
  $( "#sub-menu4" ).toggle("slow", function(){
  })
});
// WORKS - Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#sub-menu4").hide("slow");
});
// WORKS - Hides the menu when clicking anywhere but inside the drop-down
$("#drop-down4").click(function(e){
  e.stopPropagation();
});



// WORKS - Show drop down 5 when clicked
var dropDown5 = function() {
  $("#drop-down-fifth").show("slow")
}
$(".click-me4").click(dropDown5)
// WORKS - Show sub menu 2 when clicked
$( "#drop-down5" ).click(function() {
  $( "#sub-menu5" ).toggle("slow", function(){
  })
});

// WORKS - Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#sub-menu5").hide("slow");
});
// WORKS - Hides the menu when clicking anywhere but inside the drop-down
$("#drop-down-fifth").click(function(e){
  e.stopPropagation();
});



// CHECK/UNCHECK BUTTONS
$("#check-all").click(function() {
  $('input[name=list]').prop('checked', true);
});
$("#uncheck-all").click(function() {
  $('input[name=list]').prop('checked', false);
});

// // TEST FOR EACH INDIVIDUAL CHECK BOX
// $("#registered").click(function() {
//   $(' input[type="checkbox"]').prop('checked', true);
// });
// $("#registered").click(function() {
//   $(' #registered input[type="checkbox"]').prop('checked', false);
// });



// BUTTON
$("#button1").click(function() {
  $("#row-1").clone().appendTo(".new-list")
})

// // DELETE BUTTON
// var delete = function() {

// }

// $("delete-button").click(delete)




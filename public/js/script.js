// WORKS - Hide sub menu until clicked
$(".sub-menu").hide(function() {
})

// FAKE DROP DOWN 1
$( "#fake-drop-down1" ).click(function() {
  $( "#fake-menu1" ).toggle("slow", function(){
  })
});
// Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#fake-menu1").hide("slow");
});
// Hides the menu when clicking anywhere but inside the drop-down
$("#fake-drop-down1").click(function(e){
  e.stopPropagation();
});


// FAKE DROP DOWN 2
var fakeDropDown2 = function() {
  $("#static-drop-down2").show("slow")
}
$("#button1").click(fakeDropDown2)
// WORKS - Show sub menu 2 when clicked
$( "#fake-drop-down2" ).click(function() {
  $( "#fake-menu2" ).toggle("slow", function(){
  })
});
// WORKS - Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#fake-menu2").hide("slow");
});
// WORKS - Hides the menu when clicking anywhere but inside the drop-down
$("#fake-drop-down2").click(function(e){
  e.stopPropagation();
});


// DROP DOWN 1
var dropDown1 = function() {
  $("#drop-down-first").show("slow")
}
$(".click-me-static").click(dropDown1)
// Show sub menu 1 when clicked (toggle open and close)
$( "#drop-down1" ).click(function() {
  $( "#sub-menu1" ).toggle("slow", function(){
  })
});
// Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#sub-menu1").hide("slow");
});
// Hides the menu when clicking anywhere but inside the drop-down
$("#drop-down1").click(function(e){
  e.stopPropagation();
});



// DROP DOWN 2
var dropDown2 = function() {
  $("#drop-down-second").show("slow")
}
$(".click-me-static2").click(dropDown2)
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



// NEED TO CHANGE - Show sub menu 3
var dropDown3 = function() {
  $("#drop-down-third").show("slow")
}
// $(".click-me5").click(dropDown3)
$(".click-me5").click(dropDown3)
// WORKS - Show sub menu 3 when clicked
$( "#drop-down3" ).click(function() {
  $( "#sub-menu3" ).toggle("slow", function(){
  })
});



// DROP DOWN 4
var newRow = function() {
  $("#drop-down-fourth").show("slow")
}
$(".click-me1").click(newRow)
// Show sub menu 3 when clicked
$( "#drop-down4" ).click(function() {
  $( "#sub-menu4" ).toggle("slow", function(){
  })
});
// Hides drop-down once selection's been made
$(".wrap-menu").click(function(){
  $("#sub-menu4").hide("slow");
});
// Hides the menu when clicking anywhere but inside the drop-down
$("#drop-down4").click(function(e){
  e.stopPropagation();
});

var showButton1 = function() {
  $("#button-div1").show("slow")
}
$("click-me4").click(showButton1)



// WORKS - Show drop down 5 when clicked
var dropDown5 = function() {
  $("#drop-down-fifth").show("slow")
}
$(".click-me2").click(dropDown5)
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
})
// // DELETE BUTTON
var deleteButton = function() {
  $("#delete-button").show("slow")
}
$("#apply-button").click(deleteButton)

var deleteRow = function() {
  $("#static-drop-down2").remove()
  $("#drop-down-first").remove()
  $("#drop-down-second").remove()
  $("#drop-down-third").remove()
  $("#drop-down-fourth").remove()
  $("#drop-down-fifth").remove()
  $("#delete-button").remove()
}
$("#delete-button").click(deleteRow)

// WORKS - Hide sub menu until clicked
$(".sub-menu").hide(function() {
})

// WORKS - Show sub menu 1 when clicked (toggle open and close)
$( "#drop-down1" ).click(function() {
  $( "#sub-menu1" ).toggle("fast", function(){
  })
});






// WORKS - Show drop down 2 when clicked
var dropDown2 = function() {
  $("#drop-down-second").show("fast")
}

$(".click-me1").click(dropDown2)

// $( ".click-me1" ).click(function() {
//   $( "#drop-down2" ).show("fast", function() {
//   });
// });







// WORKS - Show sub menu 2 when clicked
$( "#drop-down2" ).click(function() {
  $( "#sub-menu2" ).toggle("fast", function(){
  })
});

// Show sub menu 3
$( "#drop-down3" ).click(function() {
  $( "#sub-menu3" ).toggle("fast", function(){
  })
});


// HALF WORKS - Button for On-Click to add a new row
$("#button1").click(function() {
  $("#row-2").append('#drop-down4')
})

// Show sub menu 4
$( "#drop-down4" ).click(function() {
  $( "#sub-menu4" ).toggle("fast", function(){
  })
});


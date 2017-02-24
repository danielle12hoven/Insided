// Hide sub menu until clicked
$(".sub-menu").hide(function() {
})

// Show sub menu 1 when clicked (toggle open and close)
$( "#drop-down1" ).click(function() {
  $( "#sub-menu1" ).toggle("fast", function(){
  })
});


// Show drop down 2 when clicked
$( ".click-me1" ).click(function() {
  $( "#drop-down2" ).show("fast", function() {
  });
});


// Show sub menu 2 when clicked
$( "#drop-down2" ).click(function() {
  $( "#sub-menu2" ).toggle("fast", function(){
  })
});


// $( "#drop-down3" ).click(function() {
//   $( "#sub-menu3" ).toggle("fast", function(){
//   })
// });

// $( "#drop-down4" ).click(function() {
//   $( "#sub-menu4" ).toggle("fast", function(){
//   })
// });


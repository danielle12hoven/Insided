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


// // DELETE BUTTON
var deleteButton = function() {
  $("#delete-button").show("slow")
}
$("#apply-button").click(deleteButton)

var deleteRow = function() {
  $("#static-drop-down2").hide()
  $("#drop-down-first").hide()
  $("#drop-down-second").hide()
  $("#drop-down-third").hide()
  $("#drop-down-fourth").hide()
  $("#drop-down-fifth").hide()
  $("#delete-button").hide()
}
$("#delete-button").click(deleteRow)


// PART TWO //







// TAG SECTION //
var comments = function(){
    $('#comments').click(function(){
        var appendItem1 = $('<input type="button" id="comments-button" value="x comments"/>');
        $(".tag-menu").append(appendItem1);
    });
};
comments()

$("#comments").click(function() {
  (appendItem1).hide()
})


var deleted = function(){
    $('#deleted').click(function(){
        var appendItem = $('<input type="button" value="x deleted"/>');
        $(".tag-menu").append(appendItem);
    });
};
deleted()
var notes = function(){
    $('#notes').click(function(){
        var appendItem = $('<input type="button" value="x notes"/>');
        $(".tag-menu").append(appendItem);
    });
};
notes()
var smaller = function(){
    $('#smaller').click(function(){
        var appendItem = $('<input type="button" value="x smaller"/>');
        $(".tag-menu").append(appendItem);
    });
};
smaller()
var greater = function(){
    $('#greater').click(function(){
        var appendItem = $('<input type="button" value="x greater"/>');
        $(".tag-menu").append(appendItem);
    });
};
greater()
var registeredDate = function(){
    $('#registered-date').click(function(){
        var appendItem = $('<input type="button" value="x registered date"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredDate()
var eventDate = function(){
    $('#event').click(function(){
        var appendItem = $('<input type="button" value="x event date"/>');
        $(".tag-menu").append(appendItem);
    });
};
eventDate()
var registeredBefore = function(){
    $('#before').click(function(){
        var appendItem = $('<input type="button" value="x registered before"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredBefore()
var registeredAfter = function(){
    $('#after').click(function(){
        var appendItem = $('<input type="button" value="x registered after"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredAfter()
var registeredOn = function(){
    $('#on').click(function(){
        var appendItem = $('<input type="button" value="x registered on"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredOn()
var registeredUser = function(){
    $('#registered-user').click(function(){
        var appendItem = $('<input type="button" value="x registered user"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredUser()
var moederator = function(){
    $('#moderator').click(function(){
        var appendItem = $('<input type="button" value="x moderator"/>');
        $(".tag-menu").append(appendItem);
    });
};
moederator()
var superUser = function(){
    $('#super-user').click(function(){
        var appendItem = $('<input type="button" value="x super-user"/>');
        $(".tag-menu").append(appendItem);
    });
};
superUser()
var option1 = function(){
    $('#option 1').click(function(){
        var appendItem = $('<input type="button" value="x option 1"/>');
        $(".tag-menu").append(appendItem);
    });
};
option1()
var option2 = function(){
    $('#option 2').click(function(){
        var appendItem = $('<input type="button" value="x option 2"/>');
        $(".tag-menu").append(appendItem);
    });
};
option2()
var option3 = function(){
    $('#option 3').click(function(){
        var appendItem = $('<input type="button" value="x option 3"/>');
        $(".tag-menu").append(appendItem);
    });
};
option3
var bacon = function(){
    $('#bacon').click(function(){
        var appendItem = $('<input type="button" value="x bacon"/>');
        $(".tag-menu").append(appendItem);
    });
};
bacon()
var ipsum = function(){
    $('#ipsum').click(function(){
        var appendItem = $('<input type="button" value="x ipsum"/>');
        $(".tag-menu").append(appendItem);
    });
};
ipsum()
var dolor = function(){
    $('#dolor').click(function(){
        var appendItem = $('<input type="button" value="x dolor"/>');
        $(".tag-menu").append(appendItem);
    });
};
dolor()

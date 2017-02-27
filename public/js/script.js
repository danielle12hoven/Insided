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
// Hides the submenu when clicking anywhere but inside the drop-down
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
  // $("#drop-down-first").show("slow")
  $("#drop-down-first").css({
    'opacity': '1',
    'cursor': 'default',
    'pointer-events': 'inherit'
  });
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
$("#button1").click(dropDown2)
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
$(".click-me2").click(dropDown3)
// WORKS - Show sub menu 3 when clicked
$( "#drop-down3" ).click(function() {
  $( "#sub-menu3" ).toggle("slow", function(){
  })
});



// DROP DOWN 4
var newRow = function() {
  // $("#drop-down-fourth").show("slow")
  $("#drop-down-fourth").css({
    'opacity': '1',
    'cursor': 'default',
    'pointer-events': 'inherit'
  });
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
$("#button1").click(dropDown5)
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
        $('[name=following-list').prop('checked', true),
        $('[name=followers-list').prop('checked', true),
        $('[name=badges-list').prop('checked', true),
        $('[name=signature-list').prop('checked', true),
        $('[name=profession-list').prop('checked', true)});
$("#uncheck-all").click(function() {
        $('input[name=list]').prop('checked', false);
        $('[name=following-list').prop('checked', false),
        $('[name=followers-list').prop('checked', false),
        $('[name=badges-list').prop('checked', false),
        $('[name=signature-list').prop('checked', false),
        $('[name=profession-list').prop('checked', false);
        $("#profession-button").remove();
        $("#signature-button").remove();
        $("#badges-button").remove();
        $("#following-button").remove();
        $("#followers-button").remove();
});



// APPLY BUTTON //
var applyButton = function() {
  $(".add-button").show("slow")
}
$(".click-me4").click(applyButton)

// // DELETE BUTTON
var deleteButton = function() {
  $("#delete-button").show("slow")
}
$("#button1").click(deleteButton)


var deleteRow = function() {
  $("#static-drop-down2").hide()
  // $("#drop-down-first").hide()
  $("#drop-down-second").hide()
  $("#drop-down-third").hide()
  // $("#drop-down-fourth").hide()
  $("#drop-down-fifth").hide()
  $("#delete-button").hide()
  $(".delete-tags").hide()
  // $("#button1").hide()
}
$("#delete-button").click(deleteRow)

// UNCHECKS ALL BOXES ON CLICKING RED DELETE BUTTON
var uncheckCheckboxes = function() {
  $("#delete-button").click(function() {
    $('input[type=checkbox]').prop('checked', false);
  });
}
uncheckCheckboxes()

// SELECT ALL USERS FROM GRID
$('.selectall').click(function() {
    if ($(this).is(':checked')) {
        $('[name=list2').prop('checked', true);
    } else {
        $('input[name=list2').prop('checked', false);
    }
});




// CHECK/UNCHECK EACH INDIVIDUAL CHECKBOX
$('#comments').click(function() {
    if ($(this).is(':checked')) {
        $('[name=comments-list').prop('checked', true);
    } else {
        $('[name=comments-list').prop('checked', false);
    }
});
$('#deleted').click(function() {
    if ($(this).is(':checked')) {
        $('[name=deleted-comments-list').prop('checked', true);
    } else {
        $('[name=deleted-comments-list').prop('checked', false);
    }
});
$('#notes').click(function() {
    if ($(this).is(':checked')) {
        $('[name=notes-list').prop('checked', true);
    } else {
        $('[name=notes-list').prop('checked', false);
    }
});
$('#registered-user').click(function() {
    if ($(this).is(':checked')) {
        $('[name=registered-user-list').prop('checked', true);
    } else {
        $('[name=registered-user-list').prop('checked', false);
    }
});
$('#moderator').click(function() {
    if ($(this).is(':checked')) {
        $('[name=moderator-list').prop('checked', true);
    } else {
        $('[name=moderator-list').prop('checked', false);
    }
});
$('#super-user').click(function() {
    if ($(this).is(':checked')) {
        $('[name=super-user-list').prop('checked', true);
    } else {
        $('[name=super-user-list').prop('checked', false);
    }
});
$('#registered-date').click(function() {
    if ($(this).is(':checked')) {
        $('[name=registered-date-list').prop('checked', true);
    } else {
        $('[name=registered-date-list').prop('checked', false);
    }
});
$('#event').click(function() {
    if ($(this).is(':checked')) {
        $('[name=event-date-list').prop('checked', true);
    } else {
        $('[name=event-date-list').prop('checked', false);
    }
});
$('#greater').click(function() {
    if ($(this).is(':checked')) {
        $('[name=greater-list').prop('checked', true);
    } else {
        $('[name=greater-list').prop('checked', false);
    }
});
$('#smaller').click(function() {
    if ($(this).is(':checked')) {
        $('[name=smaller-list').prop('checked', true);
    } else {
        $('[name=smaller-list').prop('checked', false);
    }
});
$('#before').click(function() {
    if ($(this).is(':checked')) {
        $('[name=before-list').prop('checked', true);
    } else {
        $('[name=before-list').prop('checked', false);
    }
});
$('#after').click(function() {
    if ($(this).is(':checked')) {
        $('[name=after-list').prop('checked', true);
    } else {
        $('[name=after-list').prop('checked', false);
    }
});
$('#on').click(function() {
    if ($(this).is(':checked')) {
        $('[name=on-list').prop('checked', true);
    } else {
        $('[name=on-list').prop('checked', false);
    }
});
$('#option1').click(function() {
    if ($(this).is(':checked')) {
        $('[name=profession-list').prop('checked', true);
    } else {
        $('[name=profession-list').prop('checked', false);
    }
});
$('#option2').click(function() {
    if ($(this).is(':checked')) {
        $('[name=signature-list').prop('checked', true);
    } else {
        $('[name=signature-list').prop('checked', false);
    }
});
$('#option3').click(function() {
    if ($(this).is(':checked')) {
        $('[name=badges-list').prop('checked', true);
    } else {
        $('[name=badges-list').prop('checked', false);
    }
});
$('#followers').click(function() {
    if ($(this).is(':checked')) {
        $('[name=followers-list').prop('checked', true);
    } else {
        $('[name=followers-list').prop('checked', false);
    }
});
$('#following').click(function() {
    if ($(this).is(':checked')) {
        $('[name=following-list').prop('checked', true);
    } else {
        $('[name=following-list').prop('checked', false);
    }
});



// TAG SECTION //
var commentsButton = function(){
    $('#comments').click(function(){
        var appendItem = $('<input type="button" id="comments-button" class="delete-tags" value="x comments"/>');
        $(".tag-menu").append(appendItem);
    });
};
commentsButton()
// DELETE TAG //
$(document).on("click", "#comments-button", function(){
   $(this).remove();
});


var deleted = function(){
    $('#deleted').click(function(){
        var appendItem = $('<input type="button" id="deleted-button" class="delete-tags" value="x deleted"/>');
        $(".tag-menu").append(appendItem);
    });
};
deleted()
$(document).on("click", "#deleted-button", function(){
   $(this).remove();
});

var notes = function(){
    $('#notes').click(function(){
        var appendItem = $('<input type="button" id="notes-button" class="delete-tags" value="x notes"/>');
        $(".tag-menu").append(appendItem);
    });
};
notes()
$(document).on("click", "#notes-button", function(){
   $(this).remove();
});

var smaller = function(){
    $('#smaller').click(function(){
        var appendItem = $('<input type="button" id="smaller-button" class="delete-tags" value="x smaller"/>');
        $(".tag-menu").append(appendItem);
    });
};
smaller()
$(document).on("click", "#smaller-button", function(){
   $(this).remove();
});

var greater = function(){
    $('#greater').click(function(){
        var appendItem = $('<input type="button" id="greater-button" class="delete-tags" value="x greater"/>');
        $(".tag-menu").append(appendItem);
    });
};
greater()
$(document).on("click", "#greater-button", function(){
   $(this).remove();
});


var registeredDate = function(){
    $('#registered-date').click(function(){
        var appendItem = $('<input type="button" id="registeredDate-button" class="delete-tags" value="x registered date"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredDate()
$(document).on("click", "#registeredDate-button", function(){
   $(this).remove();
});


var eventDate = function(){
    $('#event').click(function(){
        var appendItem = $('<input type="button" id="eventDate-button" class="delete-tags" value="x event date"/>');
        $(".tag-menu").append(appendItem);
    });
};
eventDate()
$(document).on("click", "#eventDate-button", function(){
   $(this).remove();
});

var registeredBefore = function(){
    $('#before').click(function(){
        var appendItem = $('<input type="button" id="registeredBefore-button" class="delete-tags" value="x registered before"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredBefore()
$(document).on("click", "#registeredBefore-button", function(){
   $(this).remove();
});

var registeredAfter = function(){
    $('#after').click(function(){
        var appendItem = $('<input type="button" id="registeredAfter-button" class="delete-tags" value="x registered after"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredAfter()
$(document).on("click", "#registeredAfter-button", function(){
   $(this).remove();
});

var registeredOn = function(){
    $('#on').click(function(){
        var appendItem = $('<input type="button" id="registeredOn-button" class="delete-tags" value="x registered on"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredOn()
$(document).on("click", "#registeredOn-button", function(){
   $(this).remove();
});

var registeredUser = function(){
    $('#registered-user').click(function(){
        var appendItem = $('<input type="button" id="registeredUser-button" class="delete-tags" value="x registered user"/>');
        $(".tag-menu").append(appendItem);
    });
};
registeredUser()
$(document).on("click", "#registeredUser-button", function(){
   $(this).remove();
});

var moderator = function(){
    $('#moderator').click(function(){
        var appendItem = $('<input type="button" id="moderator-button" class="delete-tags" value="x moderator"/>');
        $(".tag-menu").append(appendItem);
    });
};
moderator()
$(document).on("click", "#moderator-button", function(){
   $(this).remove();
});

var superUser = function(){
    $('#super-user').click(function(){
        var appendItem = $('<input type="button" id="superUser-button" class="delete-tags" value="x super-user"/>');
        $(".tag-menu").append(appendItem);
    });
};
superUser()
$(document).on("click", "#superUser-button", function(){
   $(this).remove();
});


var profession = function(){
    $('#option1').click(function(){
        var appendItem = $('<input type="button" id="profession-button" class="delete-tags" value="x profession"/>');
        $(".tag-menu").append(appendItem);
    });
};
profession()
$(document).on("click", "#profession-button", function(){
   $(this).remove();
});


var signature = function(){
    $('#option2').click(function(){
        var appendItem = $('<input type="button" id="signature-button" class="delete-tags" value="x signature"/>');
        $(".tag-menu").append(appendItem);
    });
};
signature()
$(document).on("click", "#signature-button", function(){
   $(this).remove();
});


var badges = function(){
    $('#option3').click(function(){
        var appendItem = $('<input type="button" id="badges-button" class="delete-tags" value="x badges"/>');
        $(".tag-menu").append(appendItem);
    });
};
badges()
$(document).on("click", "#badges-button", function(){
   $(this).remove();
});

var followers = function(){
    $('#followers').click(function(){
        var appendItem = $('<input type="button" id="followers-button" class="delete-tags" value="x followers"/>');
        $(".tag-menu").append(appendItem);
    });
};
followers()
$(document).on("click", "#followers-button", function(){
   $(this).remove();
});


var following = function(){
    $('#following').click(function(){
        var appendItem = $('<input type="button" id="following-button" class="delete-tags" value="x following"/>');
        $(".tag-menu").append(appendItem);
    });
};
following()
$(document).on("click", "#following-button", function(){
   $(this).remove();
});


var selectAllOptions = function(){
    $('#check-all').click(function(){
        var appendItem1 = $('<input type="button" id="profession-button" class="delete-tags" value="x profession"/>');
        $(".tag-menu").append(appendItem1);
        var appendItem2 = $('<input type="button" id="signature-button" class="delete-tags" value="x signature"/>');
        $(".tag-menu").append(appendItem2);
        var appendItem3 = $('<input type="button" id="badges-button" class="delete-tags" value="x badges"/>');
        $(".tag-menu").append(appendItem3);
        var appendItem4 = $('<input type="button" id="followers-button" class="delete-tags" value="x followers"/>');
        $(".tag-menu").append(appendItem4);
        var appendItem5 = $('<input type="button" id="following-button" class="delete-tags" value="x following"/>');
        $(".tag-menu").append(appendItem5);
});
};
selectAllOptions()



// ON CLICKING CHECKBOX HIGHLIGHT DIV //
$('.selectall').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight").css('background-color', '#add8e6');
    } else {
    $(".highlight").css('background-color', 'white');
    }
});

$('#check-highlight-1').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-1").css('background-color', '#add8e6');
    } else {
    $(".highlight-1").css('background-color', 'white');
    }
});

$('#check-highlight-2').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-2").css('background-color', '#add8e6');
    } else {
    $(".highlight-2").css('background-color', 'white');
    }
});

$('#check-highlight-3').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-3").css('background-color', '#add8e6');
    } else {
    $(".highlight-3").css('background-color', 'white');
    }
});

$('#check-highlight-4').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-4").css('background-color', '#add8e6');
    } else {
    $(".highlight-4").css('background-color', 'white');
    }
});

$('#check-highlight-5').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-5").css('background-color', '#add8e6');
    } else {
    $(".highlight-5").css('background-color', 'white');
    }
});

$('#check-highlight-6').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-6").css('background-color', '#add8e6');
    } else {
    $(".highlight-6").css('background-color', 'white');
    }
});

$('#check-highlight-7').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-7").css('background-color', '#add8e6');
    } else {
    $(".highlight-7").css('background-color', 'white');
    }
});

$('#check-highlight-8').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-8").css('background-color', '#add8e6');
    } else {
    $(".highlight-8").css('background-color', 'white');
    }
});

$('#check-highlight-9').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-9").css('background-color', '#add8e6');
    } else {
    $(".highlight-9").css('background-color', 'white');
    }
});

$('#check-highlight-10').click(function() {
    if ($(this).is(':checked')) {
    $(".highlight-10").css('background-color', '#add8e6');
    } else {
    $(".highlight-10").css('background-color', 'white');
    }
});



// APPEND DROPDOWNS TO BOTTOM OF SCREEN //
var cloneInput1 = function(){
    $('.click-me-static').click(function(){
      if ($(this).is(':checked')) {
        var appendInputStatic = $('#static-drop-down1').clone().prop({ id: "static-drop-down1-new", name: "newName"});
        $(appendInputStatic).appendTo(".showInputs");
      } else {
        $(".showInputs").remove(appendInputStatic);
      }
});
};
cloneInput1()


var cloneInput2 = function(){
    $('.click-me-static2').click(function(){
      if ($(this).is(':checked')) {
        var appendInputStatic2 = $('#static-drop-down2').clone().prop({ id: "static-drop-down2-new", name: "newName"});
        $(appendInputStatic2).appendTo(".showInputs");
      } else {
        $(".showInputs").remove(appendInputStatic2);
      }
});
};
cloneInput2()

var cloneInput3 = function(){
    $('.click-me1').click(function(){
      if ($(this).is(':checked')) {
        var appendInput1 = $('#drop-down-first').clone().prop({ id: "drop-down-first-new", name: "newName"});
        $(appendInput1).appendTo(".showInputs");
       } else {
        $(".showInputs").remove(appendInput1);
      }
});
};
cloneInput3()

var cloneInput4 = function(){
    $('.click-me2').click(function(){
      if ($(this).is(':checked')) {
        var appendInput2 = $('#drop-down-second').clone().prop({ id: "drop-down-second-new", name: "newName"});
        $(appendInput2).appendTo(".showInputs");
       } else {
        $(".showInputs").remove(appendInput2);
      }
});
};
cloneInput4()

var cloneInput5 = function(){
    $('.click-me3').click(function(){
      if ($(this).is(':checked')) {
        var appendInput3 = $('#drop-down-third').clone().prop({ id: "drop-down-third-new", name: "newName"});
        $(appendInput3).appendTo(".showInputs");
       }else {
        $(".showInputs").remove(appendInput3);
      }
});
};
cloneInput5()

var cloneInput6 = function(){
    $('.click-me4').click(function(){
      if ($(this).is(':checked')) {
        var appendInput4 = $('#drop-down-fourth').clone().prop({ id: "drop-down-fourth-new", name: "newName"});
        $(appendInput4).appendTo(".showInputs");
       }else {
        $(".showInputs").remove(appendInput4);
      }
});
};
cloneInput6()

var cloneInput7 = function(){
    $('.click-me5').click(function(){
      if ($(this).is(':checked')) {
        var appendInput5 = $('#drop-down-fifth').clone().prop({ id: "drop-down-fifth-new", name: "newName"});
        $(appendInput5).appendTo(".showInputs");
       }else {
        $(".showInputs").remove(appendInput5);
      }
});
};
cloneInput7()

var cloneInput1 = function(){
    $('.click-me-static').click(function(){
      if ($(this).is(':checked')) {
        var appendInputStatic = $('#static-drop-down1').clone().prop({ id: "static-drop-down1-new", name: "newName"});
        $(appendInputStatic).appendTo(".showInputs");
      } else {
        $(".showInputs").remove(appendInputStatic);
      }
});
};
cloneInput1()




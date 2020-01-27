//=============================================CAPSTONE PROJECT(II)=====================================//

/* jQuery code. */

// Function to alert upon loaded page.
$(document).ready(function () {
    alert("The Web Page has fully loaded, click okay to continue!");
});

// Function to hide page links until user clicks on Home Icon(div). 
$(document).ready(function () {

    $(".navbarList").hide();
});

$(".navbar").click(function () {
    $(".navbarList").slideToggle("slow");
});

// Function toggle paragraphs with id's upon click.

$(document).ready(function () {
    $("#para1").click(function () {
        $("#para1").animate({
            height: 'toggle'
        });
    });
    $("#para2").click(function () {
        $("#para2").animate({
            height: 'toggle'
        });
    });
    $("#para3").click(function () {
        $("#para3").animate({
            height: 'toggle'
        });
    });
    $("#return").click(function () {
        $(".change").animate({
            height: 'toggle'
        });
    });

});

//===================================================THE END============================================//
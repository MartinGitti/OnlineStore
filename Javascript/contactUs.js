//=================================CAPSTONE PROJECT(II)================================//

/* jQuewy Code. */

// Function to alert upon loaded page.
$(document).ready(function () {
    alert("The Web Page has fully loaded, click okay to continue!");
});

/* Function to hide page links until user clicks on Home Icon(div).*/
$(document).ready(function () {

    $(".navbarList").hide();
});

$(".navbar").click(function () {
    $(".navbarList").slideToggle("slow");
});

//=====================================THE END===================================//
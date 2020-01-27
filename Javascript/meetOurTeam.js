//=================================CAPSTONE PROJECT(II)================================//

/* jQuery code: */

// Function to alert upon loaded page.
$(document).ready(function () {
    alert("The Web Page has fully loaded, click okay to continue!");
});

// Function that executes the following chain of animation.
$(document).ready(function () {
    $("#animate").click(function () {
        $(".motto").animate({ fontSize: '40px' }, "slow");
        $(".motto").slideUp(2000);
        $(".motto").slideDown(2000);
    });
});

//=====================================THE END===================================//
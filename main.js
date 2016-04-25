$(document).ready(function(){

function displayTotal(){
    var total = 0;
        $('.calculate-button .btn-total').click(function(){
            var facebookTotal = parseInt($('#facebookLikes').val()) * parseInt($('#facebookPosts').val());
            var twitterTotal = parseInt($('#twitterFollowers').val()) * parseInt($('#twitterPosts').val());
            var instagramTotal = parseInt($('#instagramFollowers').val()) * parseInt($('#instagramPosts').val());
            var linkedinTotal = parseInt($('#linkedinConnections').val()) * parseInt($('#linkedinPosts').val());
            var emailTotal = parseInt($('#emailAddresses').val()) * parseInt($('#emails').val());
                if (isNaN(facebookTotal)){
                    alert("Please ensure Facebook fields are only numbers (no commas) and try again.")
                }
                else if (isNaN(twitterTotal)){
                    alert("Please ensure Twitter fields are only numbers (no commas) and try again.")
                }
                else if (isNaN(instagramTotal)){
                    alert("Please ensure Instagram fields are only numbers (no commas) and try again.")
                }
                else if (isNaN(linkedinTotal)){
                    alert("Please ensure Linkedin fields are only numbers (no commas) and try again.")
                }
                else if (isNaN(emailTotal)){
                    alert("Please ensure Email fields are only numbers (no commas) and try again.")
                }
                else { 
                    total = (facebookTotal + twitterTotal + instagramTotal + linkedinTotal + emailTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        $('.slideout-menu-toggle').on('click', function(event){
                            event.preventDefault();
                            var slideoutMenu = $('.awareness-slideout');
                            var slideoutMenuWidth = $('.awareness-slideout').width();
        
                            slideoutMenu.toggleClass("open");
        
                            if (slideoutMenu.hasClass("open")) {
                                slideoutMenu.animate({
                                    left: "0px"
                                }); 
                            } else {
                                slideoutMenu.animate({
                                                        left: -slideoutMenuWidth
                                }, 250);    
                             }
                        }); // END SLIDE OUT 
                } // END ELSE STATEMENT
            $(".totalCost h2 span").text(total);        
        });
    };
        displayTotal();

//END MAIN VALUE FIELDS

// SHOW SITE INFO TOGGLE
	$("img#flipFacebook").click(function() {
        $("#hiddenFacebook").slideToggle();
    });

    $("img#flipTwitter").click(function() {
        $("#hiddenTwitter").slideToggle();
    });

    $("img#flipInstagram").click(function() {
        $("#hiddenInstagram").slideToggle();
    });

    $("img#flipLinkedin").click(function() {
        $("#hiddenLinkedin").slideToggle();
    });

    $("img#flipEmail").click(function() {
        $("#hiddenEmail").slideToggle();
    });
// END SITE INFO TOGGLE

// SLIDE OUT TOTAL
    // $('.slideout-menu-toggle').on('click', function(event){
    //     event.preventDefault();
    //     // create menu variables
    //     var slideoutMenu = $('.awareness-slideout');
    //     var slideoutMenuWidth = $('.awareness-slideout').width();
        
    //     // toggle open class
    //     slideoutMenu.toggleClass("open");
        
    //     // slide menu
    //     if (slideoutMenu.hasClass("open")) {
    //         slideoutMenu.animate({
    //             left: "0px"
    //         }); 
    //     } else {
    //         slideoutMenu.animate({
    //             left: -slideoutMenuWidth
    //         }, 250);    
    //     }
    // });
// END SLIDE OUT TOTAL

// END TAGS
});
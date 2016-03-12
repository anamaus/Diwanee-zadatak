/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

///* MOBILE COLLAPSE MENU */
//(function($) {
//    $.fn.collapsable = function(options) {
//        // iterate and reformat each matched element
//        return this.each(function() {
//            // cache this:
//            var obj = $(this);
//            var tree = obj.next('.navigation');
//            obj.click(function(){
//                if( obj.is(':visible') ){tree.toggle();}
//            });
//            $(window).resize(function(){
//                if ( $(window).width() <= 570 ){tree.attr('style','');};
//            });
//        });
//    };
//})(jQuery);
//$(document).ready(function(){
//    $('.slide-trigger').collapsable();
//});
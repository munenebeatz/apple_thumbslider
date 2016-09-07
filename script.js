/**
 * Created by CORDELIA on 06-Sep-16.
 */
(function ($) {
    //page Title
    $('title').html('jQuery Slider');

    //mk 1sr image active
    $('.product').first().addClass('active');

    //slider:::
    var totalWidth = 0,
        positions = [];

    $('.slide').each(function (i) {
        positions[i] = totalWidth;
        totalWidth += $(this).width();

        if(!($(this).width())){
            alert('Add width to images');
            return false;
        }

    });

    $('.slides').width(totalWidth);

    $('#menu ul li a').on('click', function (e, keepScroll) {
        $('li.product').removeClass('active').addClass('inactive');
        //Add active class to parent
        $(this).parent().addClass('active');

        var pos = $(this).parent().prevAll('.product').length;
        console.log(pos);

        $('.slides').stop().animate({
            marginLeft : -positions[pos]+'px'
        },450);

        if(!autoScroll){
            clearInterval(intvl);
        }

        e.preventDefault();
    });

    var current = 1;
    function autoScroll(){
        if(current == 1) return false;

        var links = $('#menu ul li a');
        links.eq(current%(links.length)).trigger('click',[true]);
        current++;
    }

    //duration for autoscroll
    var duration = -1,
        intvl  = setInterval(function () {
            autoScroll()
        },duration*1000);

})(jQuery);
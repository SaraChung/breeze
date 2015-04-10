$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 10000
    });
    $('.menu-link').click(function(){
       var _this = $(this);
       var _this_class = _this.attr('class');

        if(_this_class.indexOf('closed') > -1){
            _this.addClass('opened');
            $('#menu-bar').slideUp('slow');
            _this.removeClass('closed');
        }
        else{
            _this.addClass('closed');
            $('#menu-bar').slideDown('slow');
            _this.removeClass('opened');
        }
    });
    $('.menu-search').click(function(){
       var _this = $(this);
       var _this_class = _this.attr('class');
        console.log(_this_class);

        if(_this_class.indexOf('opened') > -1){
            _this.addClass('closed');
            $('#search-bar').slideUp('slow');
            _this.removeClass('opened');
        }
        else{
            _this.addClass('opened');
            $('#search-bar').slideDown('slow');
            _this.removeClass('closed');
        }
    });
});

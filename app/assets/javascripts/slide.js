    function hidePanel(){
    var width = $(window).width();
    //$('.list-map').stop().animate({width: width + 'px'}, 0);
}

function slidePanel(action){
        var windowWidth = $(window).width();
        var mainDvWidth = $('.list-details').outerWidth();
        var width = windowWidth - mainDvWidth;

    if(action === 'open'){
        $('.listing').stop().animate({'width' : '35%'});
        $('.list-photo').stop().animate({'width' : '20%'});
        $("#map-arrow").attr("class", "arrow-right");
        $('.list-details').stop().animate({'width' : '50%'});
        $('.list-rent').stop().animate({'width' : '20%'});
        $('.list-map').stop().animate({'width' : '60%'}, function() {
        });
        
    }else{

        $('.list-map').attr({'width' : '38%'});
        $('.listing').stop().animate({'width' : '58%'});
        $('.list-details').stop().animate({'width' : '47%'});
        $("#map-arrow").attr("class", "arrow-left");
        $('.list-rent').stop().animate({'width' : '13%'});
        $('.list-map').stop().animate({'width' : '38%'});
        $('.list-photo').stop().animate({'width' : '30%'});
    }
}

$("a.arrleft").on("click", function(){
    slidePanel('open');
});

setTimeout(function(){
     hidePanel();
}, 0);

setTimeout(function(){
    slidePanel('open');
}, 0);

setTimeout(function(){
    slidePanel('close');
}, 0);

function slidePaneloption(action){
        var windowWidth = $(window).width();
        var mainDvWidth = $('.list-details').outerWidth();
        var width = windowWidth - mainDvWidth;

    if(action === 'open'){
        $("#option-arrow").attr("class", "arrow-right");
        $('.listings-set').stop().animate({'width' : '98%'});
        $('.options').stop().animate({'width' : '2%'}, function() {
        });
        
    }else{

        $("#option-arrow").attr("class", "arrow-left");
        $('.listings-set').attr({'width' : '82.97872%'});
        $('.options').stop().animate({'width' : '14.89362%'});
        $('.listings-set').stop().animate({'width' : '82.97872%'});
    }
}

setTimeout(function(){
     hidePanel();
}, 0);

setTimeout(function(){
    slidePaneloption('open');
}, 0);

setTimeout(function(){
    slidePaneloption('close');
}, 0);

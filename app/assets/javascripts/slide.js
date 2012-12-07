    function hidePanel(){
    var width = $(window).width();
    //$('.list-map').stop().animate({width: width + 'px'}, 0);
}

function slidePanel(action){
        var windowWidth = $(window).width();
        var mainDvWidth = $('.list-details').outerWidth();
        var width = windowWidth - mainDvWidth;

    if(action === 'close'){
        $('.listing').stop().animate({'width' : '35%'});
        $('.list-photo').stop().animate({'width' : '20%'});
        $('#map-arrow').attr('class', 'arrow-right');
        $('.list-details').stop().animate({'width' : '50%'});
        $('.list-map').stop().animate({'width' : '60%'});
        $('.gmaps4rails_map').attr({'width' : '100%'});
        $('.list-photo').css({'display' : 'none'});
        $('.map_container').attr({'width' : '100%'});
        $('#maparr').attr('class', 'goright');
        $("#maparr")[0].setAttribute("onclick","slidePanel('open')");
        $('.list-rent').stop().animate({'width' : '20%'}, function() {
        });
        
    }else{

        $('.list-map').attr({'width' : '38%'});
        $('.listing').stop().animate({'width' : '58%'});
        $('.list-details').stop().animate({'width' : '47%'});
        $('#map-arrow').attr('class', 'arrow-left');
        $('#maparr').attr('class', 'goleft');
        $("#maparr")[0].setAttribute("onclick","slidePanel('close')");
        $('.list-rent').stop().animate({'width' : '13%'});
        $('.list-map').stop().animate({'width' : '38%'});
        $('.list-photo').stop().animate({'width' : '30%'});
        $('.list-photo').css({'display' : 'block'});
    }
}


// setTimeout(function(){
//      hidePanel();
// }, 0);

// setTimeout(function(){
//     slidePanel('open');
// }, 0);

// setTimeout(function(){
//     slidePanel('close');
// }, 0);

function slidePaneloption(action){
        var windowWidth = $(window).width();
        var mainDvWidth = $('.list-details').outerWidth();
        var width = windowWidth - mainDvWidth;

    if(action === 'close'){
        $("#option-arrow").attr("class", "arrow-right");
        $('#optarr').attr('class', 'goright');
        $("#optarr")[0].setAttribute("onclick","slidePaneloption('open')");
        $('.listings-set').stop().animate({'width' : '98%'});
        $('.options').stop().animate({'width' : '2%'}, function() {
        }); 
        
    }else{

        $("#option-arrow").attr("class", "arrow-left");
        $('#optarr').attr('class', 'goleft');
        $("#optarr")[0].setAttribute("onclick","slidePaneloption('close')");
        $('.listings-set').attr({'width' : '82.97872%'});
        $('.options').stop().animate({'width' : '14.89362%'});
        $('.listings-set').stop().animate({'width' : '82.97872%'});
    }
}

// setTimeout(function(){
//      hidePanel();
// }, 0);

// setTimeout(function(){
//     slidePaneloption('open');
// }, 0);

// setTimeout(function(){
//     slidePaneloption('close');
// }, 0);

$(function(){
    $("#listhold1 div.stack1").hover(function(){
        $(this).stop().animate({top:"-130px"},{queue:false,duration:200});
    }, function() {
        $(this).stop().animate({top:"0px"},{queue:false,duration:200});
    });
});
//2回タップ
$(function(){
	var $w = $(window), $target = $('a');
	$target.on('touchstart', function(){
		var $this = $(this), isScrolling = false;
		$w.on('scroll', function(){
			isScrolling = true;
		});
		$this.on('touchend', function(){
			if(!isScrolling){
				var url = $this.find('a').attr('href');
				if(url){
					window.location.href = url;
				}
			}
			isScrolling = false;
			$this.off('touchend');
		});
	});
});

$(function(){
	$("#gnav_btn a").click(function() {
		$("#panel-btn-icon").toggleClass("close");
		return false;
	});
});

$(function() {
    if (!isPhone())
        return;

    $('span[data-action=call]').each(function() {
        var $ele = $(this);
        $ele.wrap('<a href="tel:' + $ele.data('tel') + '"></a>');
    });
});

function isPhone() {
    return (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0);
}

//innerlink
$(function() {
 	var headerHight = 94;
 	$('a[href^="#"]'+'a[href!=#]').click(function(){
		var speed = 800;
		var href= $(this).attr('href');
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$('html, body').animate({scrollTop:position}, 550, 'swing');
		return false;
	});
});

$(function(){
	$('a[href=#]').click(function(e){
		e.preventDefault();
	})
});


//animation
$(function() {
$(window).on('load scroll', function() {
	setAnimationClass();
});
 
var animationClass = 'animation-fadeIn';
var animationFinClass = 'is-animated';
var animationStartPosition = 0.75;
 
var animationFlagArr = [];
for(var i = 0; i < $('.' + animationClass).length; i++) {
	animationFlagArr[i] = false;
}
 
function setAnimationClass() {
	for(var i = 0; i < $('.' + animationClass).length; i++) {
		if($('.' + animationClass).eq(i).hasClass(animationFinClass)) {
			animationFlagArr[i] = true;
		}
	}
 
	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();
 
	for(var i = 0; i < animationFlagArr.length; i++) {
		if(animationFlagArr[i] == false) {
			var thisElement = $('.' + animationClass).eq(i);
			var thisTop = thisElement.offset().top;
			if(scrollTop + (windowHeight * animationStartPosition) > thisTop) {
				thisElement.addClass(animationFinClass);
			}
		}
	}
}
});

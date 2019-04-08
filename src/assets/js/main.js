new Vue({
  el: '#menu',
  data: {
    listOne:   false,
  }
})

new Vue({
  el: '#user-info',
  data: {
    listinfoacc:   false,
  }
});

new Vue({
  el: '#toptheface',
  data: {
    infotheface:   false,
  }
});

new Vue({
  el: '#menu-user-mobile',
  data: {
    show:   false,
  }
});

new Vue({
  el: '#contest',
  data: {
    show:   false,
    show2:   false,
  }
});

new Vue({
    el: '#subject',
    data: { show:   false, },
});

new Vue({
  el: '#menu-mobile',
    data: {
    	show:   false,
 	 },
  	methods: {
		display_drop_menu : function(){
			var drop_menu = event.target.parentElement.getElementsByClassName("drop_menu")[0];
			var drop_menus = document.getElementsByClassName("drop_menu");
			Array.from(drop_menus).forEach(function(e){
				if(e != drop_menu){
					e.classList.remove("display");
				}
			});
			var lis = document.getElementById("menu").getElementsByTagName("li");
			Array.from(lis).forEach(function(e){
				e.style.marginTop = 0;
			});
			(!drop_menu.classList.contains("display")) ? drop_menu.classList.add("display") : drop_menu.classList.remove("display");
		},
   }
});

var swiper = new Swiper('.slidenews', {
	  loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
});

var swiper2 = new Swiper('.video', {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

var swiper3 = new Swiper('.slidevideonews', {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
var swiper4 = new Swiper('.other-relate-news', {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

var app = new Vue({
    el: '#app',
    data: {
      isBasic:false,
      isRight:false,
      isLeft:false,
      isTop:false,
      isBottom:false,
      isResize:false,
      isScroll:false,
      isntScroll:false,
      isParentScale:false,
      isBgParent:false,
      isBgPanel:false,
      isCloseIcon:false,
      someIcon:false
    },
});

new Vue({
    el: '#tabs',
    data: { activetab: 1 },
});

new Vue({
  el: '#formchat',
  data: {
    show:   false,
  }
});
new Vue({
  el: '.notigroup',
  data: {
    show:   false,
  }
});
new Vue({
  el: '.msggroup',
  data: {
    show:   false,
  }
});
new Vue({
  el: '.item-boxchat-fix',
  data: {
    show:   false,
  }
});
new Vue({
  el: '.comment',
  data: {
    show:   false,
  }
});
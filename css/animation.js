
    const swiper = new Swiper('.swiper', {
    slidesPerView:2,
    spaceBetween:0,
      loop: true,
    
      autoplay: {
      delay: 3000,
      },

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints:{
        780:{
          slidesPerView:2,
        },
        0:{
          slidesPerView:1,
        }
      }
  });
    
  document.querySelectorAll('.topic').forEach(summary => {
    summary.addEventListener('click', function () {
      const panel = this.nextElementSibling;
  
     
      document.querySelectorAll('.inner').forEach(inner => {
        if (inner !== panel) {
          inner.style.maxHeight = null;
          inner.previousElementSibling.classList.remove('active');
        }
      });
  
    
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null; 
        this.classList.remove('active');
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'; 
        this.classList.add('active');
      }
    });
  });
  

    $(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const wScroll = $(window).scrollTop();
            $(".block").each(function () {
                const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
    });
});

$(function () {
  $("#hamburger-icon").on("click", function () {
    $(".menu-list").slideToggle("300"); 
  });
});


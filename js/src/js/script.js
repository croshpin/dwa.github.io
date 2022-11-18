$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/slider/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/slider/right.png"></button>',
        responsive: [{
            
                breakpoint: 767,
                settings: {
                  dots: false,
                  arrows: false
                }
    }]
    })
    function toggleSlide (item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    //modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order' ).fadeOut('slow');
    });
    
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow'); 
      })
    });
    $('input [name=phone]').mask("+7 (999) 999-99-99");
  
  });


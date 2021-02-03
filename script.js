document.addEventListener("DOMContentLoaded", function(event) {
  // swiper slider
  var swiperR = new Swiper('.swiperR', {
    slidesPerView: 'auto',
    spaceBetween: 80,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  let mySwiperS = new Swiper('.second-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {       
        slidesPerView: 2      
      },
      1024: {       
        slidesPerView: 3      
    } 
  },
  });

  // open all faq_all_questions at faq sections
  $(document).ready(function(){
  $('.faq_show_all_questions').click(function(){
    $('.faq_answer_hiden').slideToggle(300, function(){
      if ($(this).is(':hidden')) {
        $('.faq_show_all_questions').html('All questions');
      } else {
        $('.faq_show_all_questions').html('Hide questions');
      }							
    });
    return false;
  });
  });

  // Initialize and add the map
  function initMap() {
    const originalMapCenter = new google.maps.LatLng(49.844142, 24.027117);
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: originalMapCenter,
      disableDefaultUI: true
    });
  const marker = new google.maps.Marker({
    position: originalMapCenter,
    map: map,
    title: "adres"
  });
  const infowindow = new google.maps.InfoWindow({
    content: 
    "<br><b>Contact</b><br><br><b>Phone:</b><br><a href=tel:suport@yoursite.com>0 800 123 45 67</a><br><br><b>Hourse available:<br></b>11AM - 8PM</p><br><b>Email:</b><br><a href=mailto:suport@yoursite.com>suport@yoursite.com</a><br><br> ",
    position: originalMapCenter,
  });
    marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
  infowindow.open(map);
  };

  //add class for hide 
  function checkWidth() {
  if ($(window).width() < 768) {
      $('#faq_answer_one').addClass('faq_answer_hiden');
      $('#faq_answer_two').addClass('faq_answer_hiden');
  } else {
      $('#faq_answer_one ').removeClass('faq_answer_hiden');
      $('#faq_answer_two').removeClass('faq_answer_hiden');
  }
  }
  $(window).resize(checkWidth);

  // Counter Price
  $(function () {
    var jqBar = $('.tier1');
    var Status = true;
    $(window).scroll(function() {
      var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
      if (scrollEvent && Status) { 
        Status = false;
        $({numberValue: $('.tier_price_m').text()}).animate({numberValue: 11}, {
          duration: 2000,
          easing: 'linear',
          step: function() { 
              $('.tier_price_m').text(Math.ceil(this.numberValue)); 
          }
        });
        $({numberValue: $('.tier_price_coins').text()}).animate({numberValue: 99}, {
          duration: 2000,
          easing: 'linear',
          step: function() { 
              $('.tier_price_coins').text(Math.ceil(this.numberValue)); 
          }
        });
      }
    });
  });
});

const AOS = require('aos');
const jQuery = require('jquery');
require('popper.js');
require('scrollax');
require('bootstrap');
require('lightgallery');
require('lg-zoom');

// AOS
AOS.init({
  duration: 1000,
})

jQuery(document).ready(function ($) {
  'use strict';

  // Scrollax
  $.Scrollax();

  // Smooth scroll
  var $root = $('html, body');

  $('.childrens-book').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/childrens.png')
        },
        {
          "src": require('../images/childrens/childrenscover.png')
        },
        {
          "src": require('../images/childrens/childrens1.png')
        },
        {
          "src": require('../images/childrens/childrens2.png')
        },
        {
          "src": require('../images/childrens/childrens3.png')
        },
        {
          "src": require('../images/childrens/childrens4.png')
        },
        {
          "src": require('../images/childrens/childrens5.png')
        }]
    });
  });

  $('.selftour').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/selftour.png')
        },
        
        {
          "src": require('../images/selftour/selftour1.png')
        },
        {
          "src": require('../images/selftour/selftour2.png')
        },
        {
          "src": require('../images/selftour/selftour3.png')
        }]
    });
  });
  $('.entertainment').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/entertainment.png')
        },
        {
          "src": require('../images/entertainmentspread/entertainment.png')
        },
        {
          "src": require('../images/entertainmentspread/entertainment2.png')
        },
        {
          "src": require('../images/entertainmentspread/entertainmentmockup.png')
        }]
    });
  });
  $('.rule').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/rule.png')
        },
        {
          "src": require('../images/rule/rule.png')
        }]
    });
  });
  $('.mobo').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/mobo.png')
        },
        {
          "src": require('../images/mobo/mobo.png')
        },
        {
          "src": require('../images/mobo/mobomockup.png')
        }]
    });
  });

  $('.info').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/info.png')
        },
        {
          "src": require('../images/info/info.png')
        }]
    });
  });
  $('.packaging').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/pack.png')
        },
        {
          "src": require('../images/packaging/pack.png')
        },
        {
          "src": require('../images/packaging/pack2.png'),
          "subHtml": '<p>image by Noah Torralba [noahtorralba.com]</p>'
        },
        {
          "src": require('../images/packaging/pack3.png'),
          "subHtml": '<p>image by Noah Torralba [noahtorralba.com]</p>'
        }]
    });
  });
  $('.brand').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/brand.png')
        },
        {
          "src": require('../images/brand/logo.png')
        },
        {
          "src": require('../images/brand/business.png')
        },
        {
          "src": require('../images/brand/resume.png')
        }]
    });
  });
  $('.print').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/print.png')
        },
        {
          "src": require('../images/print/print.png')
        },
        {
          "src": require('../images/print/print2.png')
        },
        {
          "src": require('../images/print/print3.png')
        },
        {
          "src": require('../images/print/print4.png')
        },
        {
          "src": require('../images/print/print5.png')
        }]
    });
  });

  $('.autobio').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/auto.png')
        },
        {
          "src": require('../images/auto/automockup.png')
        },
        {
          "src": require('../images/auto/auto.png')
        }]
    });
  });

  $('.typportrait').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/portrait.png')
        },
        {
          "src": require('../images/typportrait/portrait.png')
        }]
    });
  });
  $('.psalms').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/psalms.png')
        },
        {
          "src": require('../images/psalms/psalms.png')
        }]
    });
  });
  $('.typeposters').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/type.png')
        },
        {
          "src": require('../images/typeposters/type1.png')
        },
        {
          "src": require('../images/typeposters/type2.png')
        },
        {
          "src": require('../images/typeposters/type3.png')
        }]
    });
  });

  $('.cause').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        {
          "src": require('../images/concept/cause.png')
        },
        {
          "src": require('../images/cause/cause1.png')
        },
        {
          "src": require('../images/cause/cause2.png')
        },
        {
          "src": require('../images/cause/cause3.png')
        }]
    });
  });

  $('a.js-smoothscroll[href^="#"]').click(function () {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 40
    }, 500);

    return false;
  });


  // Show menu 
  if ($(window).width() > 768) {
    $('body').removeClass('menu-open');
    $('.js-templateux-menu').css('display', 'block');
  }
  // Window Resize
  $(window).resize(function () {
    var $this = $(this);
    $('.js-templateux-menu li').removeClass('staggard');
    $('.js-toggle-menu').removeClass('is-active');
    if ($this.width() > 768) {
      $('body').removeClass('menu-open');
      $('.js-templateux-menu').css('display', 'block');

    } else {
      if ($this.width() < 768) {
        $('.js-templateux-menu').css('display', 'none');
      }
    }
  });

  // Hamburger Button 
  $('.js-toggle-menu').on('click', function (e) {
    e.preventDefault();

    var $this = $(this);

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('is-active');
      $('body').removeClass('menu-open');
      $('.js-templateux-menu li').removeClass('staggard');
    } else {
      $this.addClass('is-active');
      $('body').addClass('menu-open');

      $('.js-templateux-menu li').each(function (k) {
        var $this = $(this);
        setTimeout(function () {
          $this.addClass('staggard');
        }, 100 * k);
      });

    }

    if ($('.templateux-menu').is(':visible')) {
      $('.js-templateux-menu').fadeOut(300);
    } else {
      $('.js-templateux-menu').fadeIn(300);
    }
  })
});
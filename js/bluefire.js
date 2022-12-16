$(function() {

  let openTab = $();
  const menu = document.querySelector('#menu');
  const slideSpeed = 250;

  $('#menu ul > li > a').on('click', function() {
    let clickedTab = $(this).parent().find('.submenu');
    if (!clickedTab.is(openTab)) {
      openTab.slideUp(slideSpeed);
      clickedTab.slideDown(slideSpeed);
      openTab = clickedTab;
    } else {
      clickedTab.slideUp(slideSpeed);
    }
  });

  $(document).on('click', function(ev) {
    if (!$.contains(menu, ev.target)) {
      openTab.slideUp(slideSpeed);
      openTab = $();
    }
  });

  $(window).resize(function() {
    openTab.slideUp(slideSpeed);
    // Should be same as min-width breakpoint in bluefire.js
    if(window.innerWidth < 1301){
      $('#menu').slideUp(0);
    } else {
      $('#menu').slideDown(0);
    }
  });

  $('#mobileMenuBtn').on('click', function() {
    $('#menu').slideToggle(slideSpeed);
  });

});

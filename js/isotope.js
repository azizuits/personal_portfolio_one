<<<<<<< HEAD
// init Isotope
var $grid = $('.item_details').isotope({
    // options
  });
  // filter items on button click
  $('.item_menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
=======
// init Isotope
var $grid = $('.item_details').isotope({
    // options
  });
  // filter items on button click
  $('.item_menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
>>>>>>> 6cd11218741f4feb2cb177e9ce012b9c2f96762b
  });
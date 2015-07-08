$(document).ready(function() {
//Hide albums until they are clicked
// $(".indivContain").hide();
//Add a click event to a button
  $('.home').removeClass('invisible');

  //third design album
  $('body').on('click', '.tin1', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#tinRoofPage').addClass('invisible');
    $('#trom-logo').removeClass('invisible');
  });

  $('body').on('click', '.tin2', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#tinRoofPage').addClass('invisible');
    $('#fifth-anniv').removeClass('invisible');
  });

  $('body').on('click', '.tin3', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#tinRoofPage').addClass('invisible');
    $('#caesars').removeClass('invisible');
  });

  //Second design album
  $('body').on('click', '.mid1', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#midIllusPage').addClass('invisible');
    $('#smack-down').removeClass('invisible');
  });

  $('body').on('click', '.mid2', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#midIllusPage').addClass('invisible');
    $('#bee-pic').removeClass('invisible');
  });

  $('body').on('click', '.mid3', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#midIllusPage').addClass('invisible');
    $('#jingle').removeClass('invisible');
  });

// First design album
  $('body').on('click', '.logo1', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#illusLogoPage').addClass('invisible');
    $('#fox-post').removeClass('invisible');
  });

  $('body').on('click', '.logo2', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#illusLogoPage').addClass('invisible');
    $('#moose-logo').removeClass('invisible');
  });

  $('body').on('click', '.logo3', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#illusLogoPage').addClass('invisible');
    $('#friends-pic').removeClass('invisible');
  });

//comedy pics
  $('body').on('click', '.comedy1', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#comedyPage').addClass('invisible');
    $('#comedy-pour').removeClass('invisible');
  });

  $('body').on('click', '.comedy2', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#comedyPage').addClass('invisible');
    $('#comedy-improv').removeClass('invisible');
  });

  $('body').on('click', '.comedy3', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#comedyPage').addClass('invisible');
    $('#comedy-tin').removeClass('invisible');
  });

//Gaines pics
  $('body').on('click', '.gaines1', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#gainesPage').addClass('invisible');
    $('#new-year').removeClass('invisible');
  });

  $('body').on('click', '.gaines2', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#gainesPage').addClass('invisible');
    $('#gaines-proud').removeClass('invisible');
  });

  $('body').on('click', '.gaines3', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#gainesPage').addClass('invisible');
    $('#gaines-treat').removeClass('invisible');
  });

//Me page individual pics
  $('body').on('click', '.me3', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#mePage').addClass('invisible');
    $('.xmas').removeClass('invisible');
  });

  $('body').on('click', '.me2', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#mePage').addClass('invisible');
    $('.carlen').removeClass('invisible');
  });

  $('body').on('click', '.me1', function(event) {
    console.log("enlarge1")
    event.preventDefault();
    $('#mePage').addClass('invisible');
    $('.seesaw').removeClass('invisible');
  });

//Get albums
  $('body').on('click', '.album6', function(event) {
    console.log("second album test!")
    event.preventDefault();
    $('.home').remove();
    $('#tinRoofPage').removeClass('invisible');
    $('.home').addClass('invisible');

  });

  $('body').on('click', '.album5', function(event) {
    event.preventDefault();
    $('.home').remove();
    $('#midIllusPage').removeClass('invisible');
    $('.home').addClass('invisible');

  });

  $('body').on('click', '.album4', function(event) {
    event.preventDefault();
    $('.home').remove();
    $('#illusLogoPage').removeClass('invisible');
    $('.home').addClass('invisible');

  });

  $('body').on('click', '.album3', function(event) {
    console.log("second album test!")
    event.preventDefault();
    $('.home').remove();
    $('#comedyPage').removeClass('invisible');
    $('.home').addClass('invisible');

  });

  $('body').on('click', '.album2', function(event) {
    event.preventDefault();
    $('.home').remove();
    $('#gainesPage').removeClass('invisible');
    $('.home').addClass('invisible');

  });

  $('body').on('click', '.album1', function(event) {
    event.preventDefault();
    $('.home').remove();
    $('#mePage').removeClass('invisible');
    $('.home').addClass('invisible');

  });

  $('body').on('click', '#album-1-button', function(event) {
    console.log('CLICK ME!!')
    event.preventDefault();
    $('.home').remove();
    $('#mePage').removeClass('invisible');
    $('.threePage invisible').remove();

  });

  $('body').on('click', '#album-2-button', function(event) {
    console.log('Number two on you!')
    event.preventDefault();
    $('.home').remove();
    $('#gainesPage').removeClass('invisible');
    $('threePage invisible').remove();

  });

  $('body').on('click', '.album2', function(event) {
    console.log('Number two on you!')
    event.preventDefault();
    $('.home').remove();
    $('#gainesPage').removeClass('invisible');
    $('.home').remove();

  });

  $('body').on('click', '#album-3-button', function(event) {
    console.log('Now me!')
    event.preventDefault();
    $('.home').remove();
    $('#comedyPage').removeClass('invisible');
    $('threePage invisible').remove();

  });

    $('body').on('click', '#album-4-button', function(event) {
      console.log("It's button four!")
      event.preventDefault();
      $('.home').remove();
      $('#illusLogoPage').removeClass('invisible');
      $('threepage invisible').remove();

  });

    $('body').on('click', '#album-5-button', function(event) {
      console.log("Button five!")
      event.preventDefault();
      $('.home').remove();
      $('#midIllusPage').removeClass('invisible');
      $('threePage invisible').remove();

  });

    $('body').on('click', '#album-6-button', function(event) {
      console.log("Here's to six!!")
      event.preventDefault();
      $('.home').remove();
      $('#tinRoofPage').removeClass('invisible');
      $('threePage invisible').remove();

  });



    /*$('body').on('click', '.me1', function(event) {
      event.preventDefault();
      $('.home').remove();
      $('#mePage').removeClass('invisible');
      $('.home').addClass('invisible');
  });*/

});
// $(".album1").on('click', 'threePage', $target) {
//   event.preventDefault();
//   var clickedPage = $(this).attr.('rel');
//   console.log("clicked")
//   $(".nav").hide();
//
// };
//
// });
//
// $(".album2").click(function(event){
//     event.preventDefault();
//     $(".firstRow").hide();
//
//     $(".secondRow").hide();
//
//     $("#gainesPage").show();
//
// });
//
// //When clicked show the album clicked
// //And Hide the button album
// //Make a back to albums button appear
// //Make button hide all but current album
// });
//
// $(".buttonRow").hide();
//
//
//
// $(".albums").hide();
// //Add a click event to a button
// //When clicked show the album clicked
//And Hide the button bar
//Make a back to albums button appear
//Make button hide all but current album

$('.terr-wrap.start').on('click', function() {
  $(this).removeClass('start').addClass('selected');
  $('.terr-wrap.start').fadeOut();
  $('.terrarium-container p.intro').fadeOut();
  $('.terrarium-container').addClass('shrink');
  $('.plant-drawer').addClass('open');
  
  $(this).droppable({
    drop: function(e,ui) {
      if ($(ui.helper).clone().hasClass('original')){
      $(this).append($(ui.helper).clone());
        $(this).find('.succulent').removeClass('original');
      $(this).find('.succulent').draggable();
      }
    }
  })
});

$('.original').draggable({
  appendTo: ".terr-wrap.selected",
  helper: 'clone'
});

$('.terr-wrap').on('click', '.succulent', function(){
  $('.terr-wrap .succulent').removeClass('edit');
  $(this).addClass('edit');
  var bg = $(this).attr('src');
  $('.thumb').css({
    "background": "url(" + bg +") no-repeat",
    "background-size": "contain",
    "background-position": "50% 50%",
  });
});
// Edit the plants
$('.fa-plus').on('click',function(){
  $('.edit').css('transform', 'scale(' + ( getScale() + 0.05 ) + ')') ;
});

$('.fa-minus').on('click',function(){
  $('.edit').css('transform', 'scale(' + ( getScale() - 0.05 ) + ')') ;
});
$('.fa-arrow-up').on('click',function(){
  var level = $('.edit').css('z-index');
  $('.edit').css('z-index', level + 1);
});
$('.fa-arrow-down').on('click',function(){
  var level = $('.edit').css('z-index');
  $('.edit').css('z-index', level - 1);
});
$('.fa-trash').on('click',function(){
  $('.edit').remove();
});
function getScale() {
  var div = $('.edit').css('transform');
  var values = div.split('(')[1];
  values = values.split(')')[0];
  values = values.split(',');
  
  var a = values[0];
  var b = values[1];
  
  return Math.sqrt(a*a + b*b);
}

// Buttons
$('.clear').on('click',function(){
  $('.terr-wrap.selected .succulent').remove();
});

$('.new').on('click', function(){
  $('.terr-wrap.selected .succulent').remove();
  $('.terr-wrap.selected').removeClass('selected').addClass('start');
  $('.terr-wrap.start').fadeIn();
  $('.terrarium-container p.intro').fadeIn();
  $('.terrarium-container').removeClass('shrink');
  $('.plant-drawer').removeClass('open');
});
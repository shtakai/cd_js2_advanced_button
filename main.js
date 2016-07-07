//
console.log('test');
$('button').on('click',function(e){
  console.log('event',e);
  if($('button').hasClass('blue')){
    $('button').removeClass('blue');
    $('button').addClass('red');

  }else{
    $('button').removeClass('red');
    $('button').addClass('blue');
  }
});

$('button').on('mouseenter', function(e){
   console.log(e);
   $('button').addClass('green');
});

$('button').on('mouseleave', function(e){
   console.log(e);
   $('button').removeClass('green');
});

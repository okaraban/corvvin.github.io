$('a').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1400);
});


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.getElementById("phone").innerHTML = '<span><a href="tel:+380977061494">(097) 706-14-94</a></span>';
 } else	{
  document.getElementById("phone").innerHTML = '<span>(0619) 42-43-44</span> ';
}
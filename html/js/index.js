$(function(){
  //
  // Button back to the Top
  //
  const topBtn = $('#pageTop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    topBtn.fadeOut();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});

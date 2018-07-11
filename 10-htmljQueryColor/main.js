$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  $('p').html(function() {
    return '<span>' + $(this)[0].innerText + '</span>';
  });
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  var getRandomColor = function () {
    var digits = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += digits[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setInterval(function() {
    return $('span').css('color', getRandomColor());
  }, 1000);
});
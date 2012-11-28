/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */

window.matchMedia = window.matchMedia || (function (doc, undefined) {
  var bool;
  var docElem = doc.documentElement;
  var refNode = docElem.firstElementChild || docElem.firstChild;
  // fakeBody required for <FF4 when executed in <head>
  var fakeBody = doc.createElement('body');
  var div = doc.createElement('div');

  div.id = 'mq-test-1';
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.style.background = "none";
  fakeBody.appendChild(div);

  return function (q) {
    div.innerHTML = '&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';

    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth === 42;
    docElem.removeChild(fakeBody);

    return {
      matches: bool,
      media: q
    };
  };
}(document));

function hasJavaScript () {
  $('body').removeClass('no-js');
}

function prevent (e) {
  e.preventDefault();
}

// scrolling to page anchors with buttons
function scroll (e) {
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 500);
}


$(document).ready(function () {
  $('.button').on('touchmove', prevent);
  hasJavaScript();
  $('.scroll').click(scroll);

  // checks if browser supports mediaqueries
  if (!matchMedia('only screen').matches) {
    document.getElementsByTagName('body')[0].className = 'no-mediaq';
  }
});



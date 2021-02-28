var page = require('webpage').create();
var fs = require('fs');
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('http://www.phadler.de', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var ua = page.evaluate(function() {
      //return document.querySelector('#parking-nr').innerText;            
	  return document.querySelector('.elementor-shortcode').innerText;            
    });
    console.log(ua);
     var d = new Date()     
    fs.write('output.txt', ua + ", " + d.toLocaleTimeString('de-DE') + ", " + d.toLocaleDateString('de-DE') + '\r\n', 'a');
  }
  phantom.exit();
});



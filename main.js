$(document).ready(function() {

  $('#countdown').countdown('2017/09/14', function(event) {

    $(this).html(event.strftime('<h1>Will Launch In Australia In:</h1><h3>%D Days<br>%H Hours<br>%M Minutes<br>%S Seconds</h3>'));

  });

});

$(document).ready(function() {

  var emojis = ['✌️','😂','😝','😁','😱','👉','🙌','🍻','🔥','🌈','☀','🎈','🌹','💄','🎀','⚽','🎾','🏁','😡','👿','🐻','🐶','🐬','🐟','🍀','👀','🚗','🍎','💝','💙','👌','❤️','😍','😉','😓','😳','💪','💩','🍸','🔑','💖','🌟','🎉','🌺','🎶','👠','🏈','⚾','🏆','👽','💀','🐵','🐮','🐩','🐎','💣','👃','👂','🍓','💘','💜','👊','💋','😘','😜','😵','🙏','👋','🚽','💃','💎','🚀','🌙','🎁','⛄','🌊','⛵','🏀','🎱','💰','👶','👸','🐰','🐷','🐍','🐫','🔫','👄','🚲','🍉','💛','💚'];

  var date = '2017/09/14';

  $('#countdown-full').countdown(date, function(event) {

    var i = Math.floor(emojis.length * Math.random());

    $(this).html(event.strftime('<h3>%D Day%!D<br>%H Hour%!H<br>%M Minute%!M<br>%S Second%!S</h3><h2>' + emojis[i] + '</h2>'));

  });

  $('#countdown-hours').countdown(date, function(event) {

    var i = Math.floor(emojis.length * Math.random());

    $(this).html(event.strftime('<h3>%I Hour%!I</h3><h2>' + emojis[i] + '</h2>'));

  });

  $('#countdown-minutes').countdown(date, function(event) {

    var i = Math.floor(emojis.length * Math.random());

    $(this).html(event.strftime('<h3>%N Minute%!N</h3><h2>' + emojis[i] + '</h2>'));

  });

  $('#countdown-seconds').countdown(date, function(event) {

    var i = Math.floor(emojis.length * Math.random());

    $(this).html(event.strftime('<h3>%T Second%!T</h3><h2>' + emojis[i] + '</h2>'));

  });

  $('input[type="radio"]').each(function() {

    var div = $('#countdown-' + $(this).attr('id'));

    $(this).click(function() {

      $('.countdown').hide();
      div.show();

    });

  });

});

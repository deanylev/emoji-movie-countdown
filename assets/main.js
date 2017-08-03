$(document).ready(function() {

  var emojis = ['✌️','😂','😝','😁','😱','👉','🙌','🍻','🔥','🌈','☀','🎈','🌹','💄','🎀','⚽','🎾','🏁','😡','👿','🐻','🐶','🐬','🐟','🍀','👀','🚗','🍎','💝','💙','👌','❤️','😍','😉','😓','😳','💪','💩','🍸','🔑','💖','🌟','🎉','🌺','🎶','👠','🏈','⚾','🏆','👽','💀','🐵','🐮','🐩','🐎','💣','👃','👂','🍓','💘','💜','👊','💋','😘','😜','😵','🙏','👋','🚽','💃','💎','🚀','🌙','🎁','⛄','🌊','⛵','🏀','🎱','💰','👶','👸','🐰','🐷','🐍','🐫','🔫','👄','🚲','🍉','💛','💚'];

  var date = '2017/09/14';

  $('#countdown-full').countdown(date, function(event) {

    var i = Math.floor(emojis.length * Math.random());

    $(this).html(event.strftime('<h3>%D Days<br>%H Hours<br>%M Minutes<br>%S Seconds</h3><h2>' + emojis[i] + '</h2>'));

  });

  $('#countdown-hours').countdown(date, function(event) {

    var i = Math.floor(emojis.length * Math.random());

    $(this).html(event.strftime('<h3>%I Hours</h3><h2>' + emojis[i] + '</h2>'));

  });

  $('#countdown-minutes').countdown(date, function(event) {

    var i = Math.floor(emojis.length * Math.random());

    $(this).html(event.strftime('<h3>%N Minutes</h3><h2>' + emojis[i] + '</h2>'));

  });

  $('#countdown-seconds').countdown(date, function(event) {

    var i = Math.floor(emojis.length * Math.random());

    $(this).html(event.strftime('<h3>%T Seconds</h3><h2>' + emojis[i] + '</h2>'));

  });

  $('input[type="radio"]').each(function() {

    var div = $('#countdown-' + $(this).attr('id'));

    $(this).click(function() {

      $('.countdown').hide();
      div.show();

    });

  });

});

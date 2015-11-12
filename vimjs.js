/**
 * Created by tal on 12/11/15.
 */
$(function() {
    var iframe = $('iframe')[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function(id) {
        console.log('VIMEO ready '+id);

        player.addEvent('play', onPlay);
        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
    });


    function onPause(id) {
        console.log('VIMEO paused');
    }

    function onPlay(id) {
        console.log('VIMEO play');
    }

    function onFinish(id) {
        console.log('VIMEO finished');
    }

});
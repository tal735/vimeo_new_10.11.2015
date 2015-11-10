/**
 * Created by tal on 10/11/15.
 */
// load js file dynamically
function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}

//loadjscssfile("//f.vimeocdn.com/js/froogaloop2.min.js", "js"); //dynamically load and add this .js file
loadjscssfile("rtful_froogaloop.js", "js"); //dynamically load and add this .js file

// store all vimeo iframes for later reference
var vimeo_iframes = []
//detect vimeo video vimeo_src_regex
var vimeo_src_regex = /(.)*player.vimeo.com(.)*$/i;
//get all iframes in page
var iframes=$('iframe');
//look only for vimeo iframes
for (i=0; i<iframes.length; i++) {
    /// FIX SRC ATTRIBUTE IF NEEDED:
    // "https://player.vimeo.com/video/76979866" ----> "https://player.vimeo.com/video/76979866?api=1"
    var iframe = iframes[i];
    var iframe_src_attr = iframe.getAttribute('src');
    //check if 'src' is of form '...player.vimeo.com/...'
    if (vimeo_src_regex.test(iframe_src_attr)) {
        //check if 'api=1' exists in 'src'                      /**********************************/
                                                                /*                                */
        var api_regex = /(.)*api=1(.)*$/i;                      /*     Adding events works        */
        if (!api_regex.test(iframe_src_attr)) {                 /*     also without modifying     */
            //if not, add it                                    /*     src to &/?api=1            */
            if (iframe_src_attr.indexOf('?') == -1) {           /*                                */
                iframe_src_attr = iframe_src_attr + '?api=1';   /**********************************/
            } else {
                iframe_src_attr = iframe_src_attr + '&api=1';
            }
            iframe.setAttribute('src', iframe_src_attr);
        }

        //add id to element if not exists
        var id = iframe.getAttribute('id');
        if (id == null){
            var idname = 'rtfulvpid_'+i;
            iframe.setAttribute('id', idname);
            iframe_src_attr = iframe_src_attr + '&player_id=' + idname;
            iframe.setAttribute('src', iframe_src_attr);
        }else{
            console.log('id: ' + id);
        }

        //save only vimeo iframes
        vimeo_iframes.push(iframe);
    }
}

$(window).load(function(){
    $(function() {
        //alert("jQuery starting!")
        //var iframe = $('iframe')[0];
        for (i=0; i<vimeo_iframes.length; i++) {
            var iframe = vimeo_iframes[i];
            var player = $f_rtfl(iframe);

            // When the player is ready, add listeners for pause, finish, and playProgress
            player.addEvent('ready', function (id) {
                alert('ready');

                player.addEvent('play', function (id) {
                    alert('play');
                });
                player.addEvent('pause',function (id) {
                    alert('paused');
                });
                player.addEvent('finish', function (id) {
                    alert('finished');
                });
            });
        }
    });
});

/*
 NOTES:
 1. api=1 in src is not necessary for some reason...
 2. same goes for playerid (id=..) which vimeo states is necessary
 3.
 */
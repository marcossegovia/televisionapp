// globals
var APP;

function initVideo() {
    try {
        document.getElementById('video').bindToCurrentChannel();
    } catch (e) {
        console.log("ERROR: ", e);
    }
    try {
        document.getElementById('video').setFullScreen(false);
    } catch (e) {
        console.log("ERROR: ", e);
    }
}

function initApp(page) {
    try {
        APP = document.getElementById('oipfAppMan').getOwnerApplication(document);
        APP.show();
        //APP.activate();
    } catch (e) {
        console.log("ERROR: ", e);
    }

    // set keyset: red + green + yellow + blue + navigation + numeric
    setKeyset(0x1 + 0x2 + 0x4 + 0x8 + 0x10 + 0x100);

    // show video broadcast
    showVideo(false, page);

    // set focus
    //document.getElementById("start").focus();
}

function closeApp() {
    try {
        APP.destroyApplication();
        return;
    } catch (e) {
        console.log("ERROR: ", e);
    }
}

function setKeyset(mask) {
    // for HbbTV 0.5:
    try {
        var elemcfg = document.getElementById('oipfConfig');
        elemcfg.keyset.value = mask;
    } catch (e) {
        // ignore
    }
    try {
        var elemcfg = document.getElementById('oipfConfig');
        elemcfg.keyset.setValue(mask);
    } catch (e) {
        // ignore
    }
    // for HbbTV 1.0:
    try {
        APP.privateData.keyset.setValue(mask);
        APP.privateData.keyset.value = mask;
    } catch (e) {
        // ignore
    }
}
function showVideo(typ, page) {
    var elem = document.getElementById('video-container');
    var oldvid = document.getElementById('video');
    try {
        oldvid.stop();
    } catch (e) {
        // ignore
    }
    try {
        oldvid.release();
    } catch (e) {
        // ignore
    }
    var mtype = typ ? 'video/mp4' : 'video/broadcast';
    var ihtml = '<object id="video" type="'+mtype+'" style="position: absolute; width: 350px; height: 250px;"><'+'/object>';

    elem.style.left = '0px';
    elem.style.top = '0px';
    elem.style.width = '350px';
    elem.style.height = '250px';
    elem.innerHTML = ihtml;
    var succss = false;
    var phase = 1;
    try {
        var videlem = document.getElementById('video');
        if (videlem) {
            if (typ) {
                phase = 2;
                videlem.data = '../assets/videos/'+videos[videoSelected]['urlVideo']+'.mp4';
                phase = 3;
                videlem.play(1);
                succss = true;
            } else {
                phase = 4;
                videlem.bindToCurrentChannel();
                succss = true;
            }
        }
    } catch (e) {
        // failed
        console.log("ERROR: ", e);
    }

    fullscreen = false;
    try {
        videlem.setFullscreen(false);
    } catch (e) {
        // ignore
    }
}

function setSpeed(fact) {
    try {
        var vid = document.getElementById('video');
        vid.play(fact);
        setTimeout(function() {checkPlaySpeed(fact);}, 1000);
    } catch (e) {
        console.log("Cannot set playback speed to " + fact);
        console.log("ERROR: ", e);
    }
}

/*
function showVideo(typ, page) {
    var elem = document.getElementById('video-container');
    var oldvid = document.getElementById('video');
    try {
        oldvid.stop();
    } catch (e) {
        // ignore
    }
    try {
        oldvid.release();
    } catch (e) {
        // ignore
    }
    var mtype = typ ? 'video/mp4' : 'video/broadcast';

    if(page==1 || page==2)
    {
        var ihtml = '<object id="video" type="'+mtype+'" style="position: absolute; left: 0px; top: 0px; width: 1280px; height: 720px;""><'+'/object>';
        elem.style.left = '0px';
        elem.style.top = '0px';
        elem.style.width = '1280px';
        elem.style.height = '720px';
        elem.innerHTML = ihtml;
    }
    if(page==3)
    {
        var ihtml = '<object id="video" type="'+mtype+'" style=" position:absolute; width: 350px; height: 250px;""><'+'/object>';
        elem.style.left = '0px';
        elem.style.top = '0px';
        elem.style.width = '350px';
        elem.style.height = '250px';
        elem.innerHTML = ihtml;
    }
    //Video Broadband/Youtube
    /*if(page==4)
    {
        //$("#video-container-youtube").empty();
        //$("#video-container-youtube").append('<iframe width="350" height="250" src="http://www.youtube.com/v/' +videos[videoSelected]['urlVideo']+ '?version=3&enablejsapi=1" frameborder="0" allowfullscreen></iframe>');
        //var ihtml ='<embed id="playerid" width="350px" height="250px" allowfullscreen="true" allowscriptaccess="always" quality="default" bgcolor="#000000" name="playerid" style="" src="http://www.youtube.com/v/'+videos[videoSelected]['urlVideo']+'?enablejsapi=1&version=3&playerapiid=ytplayer" type="application/x-shockwave-flash">';
        var ihtml = '<object id="video" type="'+mtype+'" style=" position:absolute; width: 350px; height: 250px;""><'+'/object>';
        elem.style.left = '0px';
        elem.style.top = '0px';
        elem.style.width = '350px';
        elem.style.height = '250px';
        elem.innerHTML = ihtml;
        //$("#video-container-youtube").show();
    }*//*
    var succss = false;
    var phase = 1;
    try {
        var videlem = document.getElementById('video');
        if (videlem) {
            if (typ) {
                phase = 2;
                videlem.data = 'http://itv.ard.de/video/timecode.php/video.mp4';
                phase = 3;
                videlem.play(1);
                succss = true;
            } else {
                phase = 4;
                videlem.bindToCurrentChannel();
                succss = true;
            }
        }
    } catch (e) {
        // failed
        console.log("ERROR: ", e);
    }

    fullscreen = false;
    try {
        videlem.setFullscreen(false);
    } catch (e) {
        // ignore
    }
}*/

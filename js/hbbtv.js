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

function initApp() {
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
    showVideo(false);

    // set focus
    document.getElementById("start").focus();
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

function registerKeyEventListener() {
    document.addEventListener("keydown", function(e) {
        if (handleKeyCode(e.keyCode)) {
            e.preventDefault();
        }
    }, false);
}

function runStep(name) {
    if (name=='start') {
        showVideo(true);
    } else if (name=='pause') {
        setSpeed(0);
    } else if (name=='play') {
        setSpeed(1);
    } else if (name=='ffwd') {
        setSpeed(2);
    } else if (name=='slowm') {
        setSpeed(0.5);
    } else if (name=='gopos30') {
        gotoPos(30);
    } else if (name=='gopos150') {
        gotoPos(150);
    } else if (name=='rewind') {
        setSpeed(-1);
    } else if (name=='stop') {
        showVideo(false);
    }
}

function showVideo(typ) {
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
    var ihtml = '<object id="video" type="'+mtype+'><'+'/object>';
    elem.style.left = '0px';
    elem.style.top = '0px';
    elem.style.width = '1280px';
    elem.style.height = '720px';
    elem.innerHTML = ihtml;
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

function checkPlaySpeed(fact) {
    var vid = document.getElementById('video');
    if (vid.playState === 3 || vid.playState === 4) {
        console.log("Still buffering: waiting to check reported playback speed...");
        setTimeout(function() {checkPlaySpeed(fact);}, 1000);
        return;
    }
    if (parseInt(fact)==parseInt(vid.speed)) {
        console.log("Video playback speed should now be " + fact);
    } else {
        var addmsg = (fact == 0 || fact == 1) ? '' : '. Note: test is OK even though this test failed, as feature is not mandatory.';
        console.log("Setting speed succeeded, but reported speed is " + vid.speed + addmsg);
    }
}

function gotoPos(scnds) {
    try {
        var vid = document.getElementById('video');
        vid.seek(scnds * 1000);
        console.log("Waiting for playback to resume to check reported playback position...");
        testPos(scnds);
    } catch (e) {
        console.log("Cannot change playback position");
    }
}

function testPos(scnds) {
    if (testTimeout) {
        clearTimeout(testTimeout);
    }
    var vid = document.getElementById('video');
    testTimeout = setTimeout(function() {
        testTimeout = false;
        if (vid.playState && (vid.playState == 2 || vid.playState == 3 || vid.playState == 4)) {
            testPos(scnds); // delay test, we are not playing yet.
            return;
        }
        var secs = isNaN(vid.playPosition) ? -1 : Math.floor(vid.playPosition/1000);
        if (secs >=0 && secs >= (scnds - 2) && secs <= (scnds + 10)) {
            console.log("Video playback position is at " + secs + " seconds");
        } else {
            console.log("Seek succeeded, but reported playbackposition is at " + secs + " seconds");
        }
    }, 2000);
}
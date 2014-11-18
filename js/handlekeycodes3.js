
function handleKeyCode3(kc)
{
  //alert('key');
	console.log(videoSelected);
  switch (kc) {

    case kc.keyCode == 16:

        break;
      case VK_RED:
	  $("#log").append("red!");
        /* Reproducimos video Broadband y aumentamos en 1 el número de reproducciones. */

          videos[videoSelected]['playbacks'] = parseInt(videos[videoSelected]['playbacks'])+1;

        $('#video-list-'+videoSelected+' #video-info-votes').empty();
        $('#video-list-'+videoSelected+' #video-info-votes').text('Rep: '+videos[videoSelected]['playbacks']);

        showVideo(true);
        broadcast=false;

	  break;	
	case VK_GREEN:
	  $("#log").append("green!");
      setSpeed(0);
	  break;	  
    case VK_YELLOW:
	  $("#log").append("yellow!");
        showVideo(false);
        broadcast=true;
	  break;	
    case VK_BLUE:
	  $("#log").append("blue!");
        if(broadcast)
        {
            window.location = "/televisionapp/templates/fullScreenBroadcast.html";
        }
        else
        {
            window.location = "/televisionapp/templates/fullScreenBroadband.html";
        }
	  break;		  
	case VK_ENTER:
	  $("#log").append("enter!");
	  break;
	case VK_UP:
	  //alert("up");
	  $("#log").append("up!");
      if(videoSelected>0)
      {
          movePreviousActiveVideo()
      }
	  break;
	case VK_DOWN:
	  //alert("down");
	  $("#log").append("down!");
      if(videoSelected<9)
      {
          moveNextActiveVideo()
      }

	  break;	  
	case VK_RIGHT:
	  //alert("right");
	  $("#log").append("right!");
	  break;
	case VK_LEFT:
	  //alert("left");
	  $("#log").append("left!");
	  break;
	case VK_0:
	  alert("exit");
	  $("#log").append("exit!");
	  closeApp();
	  break; 
	}

    function moveNextActiveVideo()
    {
        $( "#video-nav-arrows" ).remove();
        $('#video-list-'+videoSelected+'').css({"border":"#38302C solid 3px"});
        videoSelected=videoSelected+1;
        $('#video-list-'+videoSelected+'').css({"border":"rgba(210,180,12,1) solid 3px"});
        $('#video-list-'+videoSelected+'').append('<div id="video-nav-arrows">' +
            '<img id="video-arrows" src="../assets/up_ob.gif">' +
            '<img id="video-arrows" src="../assets/ok_ob.gif">' +
            '<img id="video-arrows" src="../assets/down_ob.gif">' +
            '</div>');
        updateVideoInfo();
        if(videoSelected>3)
        {
            $('#video-list-'+videoSelected+'').css({"visibility":"visible"});
            var aux = videoSelected-4;
            $('#video-list-'+aux+'').css({"visibility":"hidden"});
            var aux2;

            if(aux==0)
            {
                 aux2 = 9;
            }
            else
            {
                aux2 = aux-1;
            }
            $('#video-list-'+aux+'').insertAfter('#video-list-'+aux2+'');

        }
    }

    function movePreviousActiveVideo()
    {
        $( "#video-nav-arrows" ).remove();
        $('#video-list-'+videoSelected+'').css({"border":"#38302C solid 3px"});
        videoSelected = videoSelected-1;
        $('#video-list-'+videoSelected+'').css({"border":"rgba(210,180,12,1) solid 3px"});
        $('#video-list-'+videoSelected+'').append('<div id="video-nav-arrows">' +
            '<img id="video-arrows" src="../assets/up_ob.gif">' +
            '<img id="video-arrows" src="../assets/ok_ob.gif">' +
            '<img id="video-arrows" src="../assets/down_ob.gif">' +
            '</div>');
        updateVideoInfo();

        if(videoSelected<6)
        {
            $('#video-list-'+videoSelected+'').css({"visibility":"visible"});
            var aux = videoSelected+4;
            $('#video-list-'+aux+'').css({"visibility":"hidden"});
            var aux2
            aux2 = videoSelected+1;
            $('#video-list-'+videoSelected+'').insertBefore('#video-list-'+aux2+'');

        }
    }

    function updateVideoInfo()
    {
        $( "#video-info-container" ).empty();
        $("#video-info-container").append('<div>' +
            '<ul>' +
            '<li>'+ videos[videoSelected]['name'] +'</li>' +
            '<li>'+ videos[videoSelected]['author'] +'</li>' +
            '<li>'+ videos[videoSelected]['playbacks'] +'</li>' +
            '<li>'+ videos[videoSelected]['description'] +'</li>' +
            '</ul>' +
            '</div>');
    }
}
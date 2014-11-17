var videoSelected=0;

function handleKeyCode3(kc)
{
  //alert('key');
	console.log(videoSelected);
  switch (kc) {

    case kc.keyCode == 16:

        break;
      case VK_RED:
	  $("#log").append("red!");
	  console.log("red!");
        /* Reproducimos video Broadband y aumentamos en 1 el número de reproducciones. */

          videos[videoSelected]['playbacks'] = parseInt(videos[videoSelected]['playbacks'])+1;

        $('#video-list-'+videoSelected+' #video-info-votes').empty();
        $('#video-list-'+videoSelected+' #video-info-votes').text('Rep: '+videos[videoSelected]['playbacks']);

        showVideo(true);

	  break;	
	case VK_GREEN:
	  $("#log").append("green!");
	  console.log("green!");
      setSpeed(0);
	  break;	  
    case VK_YELLOW:
	  $("#log").append("yellow!");
	  console.log("yellow!");
        showVideo(false);
	  break;	
    case VK_BLUE:
	  $("#log").append("blue!");
	  console.log("blue!");
	  break;		  
	case VK_ENTER:
	  $("#log").append("enter!");
	  console.log("enter!");
	  break;
	case VK_UP:
	  //alert("up");
	  $("#log").append("up!");
	  console.log("up!");
      if(videoSelected>0)
      {
          movePreviousActiveVideo()
      }
	  break;
	case VK_DOWN:
	  //alert("down");
	  $("#log").append("down!");
	  console.log("down!");
      if(videoSelected<9)
      {
          moveNextActiveVideo()
      }

	  break;	  
	case VK_RIGHT:
	  //alert("right");
	  $("#log").append("right!");
	  console.log("right!");
	  break;
	case VK_LEFT:
	  //alert("left");
	  $("#log").append("left!");
	  console.log("left!");
	  break;
	case VK_0:
	  alert("exit");
	  $("#log").append("exit!");
	  console.log("exit!");
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
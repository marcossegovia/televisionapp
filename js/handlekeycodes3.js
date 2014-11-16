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
        //$("#video").css({"visibility":"hidden"});
          stopVideo();
        //showVideo(true, 4);
	  break;	
	case VK_GREEN:
	  $("#log").append("green!");
	  console.log("green!");
	  break;	  
    case VK_YELLOW:
	  $("#log").append("yellow!");
	  console.log("yellow!");
	  break;	
    case VK_BLUE:
	  $("#log").append("blue!");
	  console.log("blue!");
	  break;		  
	case VK_ENTER:
	  $("#log").append("enter!");
	  console.log("enter!");
	  //var aId = document.activeElement.getAttribute('id');
	  //runStep(aId);
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
        $('#video-list-'+videoSelected+'').css({"border":"#38302C solid 3px"});
        videoSelected=videoSelected+1;
        $('#video-list-'+videoSelected+'').css({"border":"rgba(210,180,12,1) solid 3px"});
        updateVideoInfo();
        if(videoSelected>3)
        {
            $('#video-list-'+videoSelected+'').css({"visibility":"visible"});
            var aux = videoSelected-4;
            $('#video-list-'+aux+'').css({"visibility":"hidden"});
            var aux2;

            if(videoSelected==0)
            {
                 aux2 = 9
            }
            else
            {
                aux2 = aux-1;
            }
            console.log(aux);
            console.log(aux2);
            $('#video-list-'+aux+'').insertAfter('#video-list-'+aux2+'');

        }
    }

    function movePreviousActiveVideo()
    {
        $('#video-list-'+videoSelected+'').css({"border":"#38302C solid 3px"});
        videoSelected = videoSelected-1;
        $('#video-list-'+videoSelected+'').css({"border":"rgba(210,180,12,1) solid 3px"});
        updateVideoInfo();

        if(videoSelected>3)
        {
            $('#video-list-'+videoSelected+'').css({"visibility":"visible"});
            var aux = videoSelected-4;
            $('#video-list-'+aux+'').css({"visibility":"hidden"});


            if(aux==0)
            {
               var aux2 = 9
            }
            else
            {
               var aux2 = aux-1;
            }
            console.log(aux);
            console.log(aux2);
            $('#video-list-'+aux+'').insertAfter('#video-list-'+aux2+'');

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
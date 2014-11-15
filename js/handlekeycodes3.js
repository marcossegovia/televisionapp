var index=0;

function handleKeyCode3(kc)
{
  //alert('key');
	
  switch (kc) {

    case kc.keyCode == 16:

        break;
    case VK_RED:
	  alert("red");
	  $("#log").append("red!");
	  console.log("red!");
	  break;	
	case VK_GREEN:
	  alert("green");
	  $("#log").append("green!");
	  console.log("green!");
	  break;	  
    case VK_YELLOW:	
	  alert("yellow");
	  $("#log").append("yellow!");
	  console.log("yellow!");
	  break;	
    case VK_BLUE:	
	  alert("blue");
	  $("#log").append("blue!");
	  console.log("blue!");
	  break;		  
	case VK_ENTER:
	  //alert("enter");
	  $("#log").append("enter!");
	  console.log("enter!");
	  //var aId = document.activeElement.getAttribute('id');
	  //runStep(aId);
	  break;
	case VK_UP:
	  //alert("up");
	  $("#log").append("up!");
	  console.log("up!");
      if(this.index>0)
      {
          this.index--;
          movePreviousActiveVideo()
      }
	  break;
	case VK_DOWN:
	  //alert("down");
	  $("#log").append("down!");
	  console.log("down!");
      if(this.index<9)
      {
          this.index++;
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
        $('#video-list-'+this.index-1+'').css({"border-style":none});
        $('#video-list-'+this.index+'').css({"border-style":solid, "border-color": rgba(210,180,12,1)});
    }

    function movePreviousActiveVideo()
    {
        $('#video-list-'+this.index+1+'').css({"border-style":none});
        $('#video-list-'+this.index+'').css({"border-style":solid, "border-color": rgba(210,180,12,1)});
    }
}
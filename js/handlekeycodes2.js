
function handleKeyCode2(kc)
{
  //alert('key');
	
  switch (kc) {

    case kc.keyCode == 16:

        break;
    case VK_RED:
	  alert("red");
	  $("#log").append("red!");
	  break;	
	case VK_GREEN:
	  alert("green");
	  $("#log").append("green!");
	  break;	  
    case VK_YELLOW:	
	  alert("yellow");
	  $("#log").append("yellow!");
	  break;	
    case VK_BLUE:	
	  alert("blue");
	  $("#log").append("blue!");
	  break;		  
	case VK_ENTER:
	  //alert("enter");
	  $("#log").append("enter!");
      window.location = "/televisionapp/templates/pag3.html";
	  break;
	case VK_UP:
	  //alert("up");
	  $("#log").append("up!");
	  break;
	case VK_DOWN:
	  //alert("down");
	  $("#log").append("down!");
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


}
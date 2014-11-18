function handleKeyCode(kc)
{
  //alert('key');
	
  switch (kc) {

    case kc.keyCode == 16:

        break;
    case VK_RED:
	  alert("red");
	  $("#log").append("red!");
      window.location = "/televisionapp/templates/pag2.html";
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
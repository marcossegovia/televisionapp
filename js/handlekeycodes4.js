function handleKeyCode4(kc)
{
    //alert('key');

    switch (kc) {

        case kc.keyCode == 16:

            break;
        case VK_RED:
            $("#log").append("red!");
            break;
        case VK_GREEN:
            $("#log").append("green!");
            break;
        case VK_YELLOW:
            $("#log").append("yellow!");
            break;
        case VK_BLUE:
            $("#log").append("blue!");
            window.location = "/televisionapp/templates/pag3.html";
            break;
        case VK_ENTER:
            $("#log").append("enter!");
            break;
        case VK_UP:
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
            $("#log").append("exit!");
            closeApp();
            break;
    }
}
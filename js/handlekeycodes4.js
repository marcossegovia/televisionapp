function handleKeyCode4(kc)
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
            window.location = "/televisionapp/templates/pag3.html";
            break;
        case VK_ENTER:
            //alert("enter");
            $("#log").append("enter!");
            console.log("enter!");
            break;
        case VK_UP:
            //alert("up");
            $("#log").append("up!");
            console.log("up!");
            break;
        case VK_DOWN:
            //alert("down");
            $("#log").append("down!");
            console.log("down!");
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
}
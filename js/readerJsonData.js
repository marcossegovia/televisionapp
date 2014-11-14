/**
 * Created by Marcos on 13/11/14.
 */

$.getJSON( "../assets/dataService/videos.json", function( data ) {

    var videos = new Array();
    var numVideo=0;

    $.each( data.videos, function( key, val ) {
        videos[numVideo] = new Array();

/*        <div id="video-block">
            <img id="video-image-preview" src="../assets/YouTube.png">
                <div id="video-info">
                    <div>Album name</div>
                    <div>Artist name</div>
                </div>
                <div id="video-info-votes">Votes: #</div>
                <div id="video-nav-arrows">
                    <img id="video-arrows" src="../assets/up_ob.gif">
                        <img id="video-arrows" src="../assets/ok_ob.gif">
                            <img id="video-arrows" src="../assets/down_ob.gif">
                            </div>
                        </div>*/
        videos[numVideo]['imgName']= "<li id='" + key + "'>" + val.imgName + "</li>";
        videos[numVideo]['urlVideo']= "<li id='" + key + "'>" + val.urlVideo + "</li>";
        videos[numVideo]['name']= "<li id='" + key + "'>" + val.name + "</li>" ;
        videos[numVideo]['description']= "<li id='" + key + "'>" + val.description + "</li>" ;
        videos[numVideo]['playbacks']= "<li id='" + key + "'>" + val.playbacks + "</li>" ;
        videos[numVideo]['author']= "<li id='" + key + "'>" + val.author + "</li>" ;
        numVideo++;
    });
    console.log(videos.length);
    videos.forEach(function()
    {
        $(videos).appendTo( "#video-list" );
    });
});
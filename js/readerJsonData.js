/**
 * Created by Marcos on 13/11/14.
 */

$.getJSON( "../assets/dataService/videos.json", function( data ) {

    var videos = new Array();
    var numVideo=0;

    $.each( data.videos, function( key, val ) {
        videos[numVideo]['imgName']=( "<li id='" + key + "'>" + val.imgName + "</li>" );
        videos[numVideo]['urlVideo']=( "<li id='" + key + "'>" + val.urlVideo + "</li>" );
        videos[numVideo]['name']=( "<li id='" + key + "'>" + val.name + "</li>" );
        videos[numVideo]['description']=( "<li id='" + key + "'>" + val.description + "</li>" );
        videos[numVideo]['playbacks']=( "<li id='" + key + "'>" + val.playbacks + "</li>" );
        videos[numVideo]['author']=( "<li id='" + key + "'>" + val.author + "</li>" );
        numVideo++;
    });

    $( "<ul/>", {
        "class": "item-video",
        html: videos.join( "" )
    }).appendTo( "#video-list" );
});
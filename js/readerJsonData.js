/**
 * Created by Marcos on 13/11/14.
 */

$.getJSON( "../assets/dataService/videos.json", function( data ) {

    var videos = [];

    $.each( data.videos, function( key, val ) {
        videos.push( "<li id='" + key + "'>" + val.imgName + "</li>" );
        videos.push( "<li id='" + key + "'>" + val.urlVideo + "</li>" );
        videos.push( "<li id='" + key + "'>" + val.name + "</li>" );
        videos.push( "<li id='" + key + "'>" + val.description + "</li>" );
        videos.push( "<li id='" + key + "'>" + val.playbacks + "</li>" );
        videos.push( "<li id='" + key + "'>" + val.author + "</li>" );
    });

    $( "<ul/>", {
        "class": "item-video",
        html: videos.join( "" )
    }).appendTo( "#video-list" );
});
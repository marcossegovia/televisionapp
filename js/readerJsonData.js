/**
 * Created by Marcos on 13/11/14.
 */

$.getJSON( "../assets/dataService/videos.json", function( data ) {

    var videos = [];

    $.each( data.videos, function( key, val ) {
        videos.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
        "class": "item-video",
        html: videos.join( "" )
    }).appendTo( "#video-list" );
});
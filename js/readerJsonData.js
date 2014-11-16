/**
 * Created by Marcos on 13/11/14.
 */
var videos = new Array();

$.getJSON( "../assets/dataService/videos.json", function( data ) {


    var numVideo=0;

    $.each( data.videos, function( key, val ) {
        videos[numVideo] = new Array();
        videos[numVideo]['imgName']= val.imgName;
        videos[numVideo]['urlVideo']= val.urlVideo;
        videos[numVideo]['name']= val.name;
        videos[numVideo]['description']= val.description ;
        videos[numVideo]['playbacks']= val.playbacks;
        videos[numVideo]['author']= val.author ;
        numVideo++;
    });

    for (index = 0; index < videos.length; index++)
    {
        if(index<4)
        {
            $("#video-list").append('<div class="video-block" id="video-list-'+index+'">' +
                '<img id="video-image-preview" src="../assets'+ videos[index]['imgName'] +'.png">' +
                '<div id="video-info">' +
                '<div>'+ videos[index]['name'] +'</div>' +
                '<div>'+ videos[index]['author'] +'</div>' +
                '</div>' +
                '<div id="video-info-votes">Rep: '+ videos[index]['playbacks'] +'</div>' +
                '</div>');
        }
        else
        {

            $("#video-list").append('<div style="visibility: hidden"; class="video-block" id="video-list-'+index+'">' +
                '<img id="video-image-preview" src="../assets'+ videos[index]['imgName'] +'.png">' +
                '<div id="video-info">' +
                '<div>'+ videos[index]['name'] +'</div>' +
                '<div>'+ videos[index]['author'] +'</div>' +
                '</div>' +
                '<div id="video-info-votes">Rep:'+ videos[index]['playbacks'] +'</div>' +
                '</div>');
        }


        /*
         <div id="video-nav-arrows">
             <img id="video-arrows" src="../assets/up_ob.gif">
             <img id="video-arrows" src="../assets/ok_ob.gif">
             <img id="video-arrows" src="../assets/down_ob.gif">
         </div>*/
    }
});

var users = new Array();

$.getJSON( "../assets/dataService/users.json", function( data ) {



    $.each( data.users, function( key, val ) {

        users.push( val.name);
    });

    for (index = 0; index < users.length; index++)
    {
        $("#users-container").append('<ul>' +
            '<li>'+ users[index] +'</li>' +
            '</ul>');


        /*

         <div id="video-nav-arrows">
         <img id="video-arrows" src="../assets/up_ob.gif">
         <img id="video-arrows" src="../assets/ok_ob.gif">
         <img id="video-arrows" src="../assets/down_ob.gif">
         </div>*/
    }
});
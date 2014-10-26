/**
 * Created by Marcos on 24/10/14.
 */

window.onload = function() {
    console.log('hey 2!!');

    var randomNumber = Math.floor((Math.random() * 9000) + 1000);

    $('#sync-message').html('SYNC NUMB: '+randomNumber);
    console.log(randomNumber);
}
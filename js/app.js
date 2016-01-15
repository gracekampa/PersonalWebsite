/**
 * Created by OWNER on 9/1/2015.
 */

var main = function() {

    $('#about').click(function() {
        $(this).toggleClass("active");
    });

    $('.languages').click(function() {
        $(this).toggleClass('active');

        if($(this).hasClass('active')) {
            // open
            $(this).delay(200).animate(
                {opacity:1,height:'150'},700);
            $('.languages-content').delay(200).show(0);
            document.getElementById("arrow-lang").src="images/ic_up_arrow.svg";
        }
        else {
            //close
            $(this).delay(200).animate(
                {opacity:1,height:'70'},700);
            $('.languages-content').delay(750).hide(0);
            document.getElementById("arrow-lang").src="images/ic_down_arrow.svg";
        }
    });

    $('.software').click(function() {
        $(this).toggleClass('active');

        if($(this).hasClass('active')) {
            // open
            $(this).delay(200).animate(
                {opacity:1,height:'160'},700);
            $('.software-content').delay(200).show(0);
            document.getElementById("arrow-software").src="images/ic_up_arrow.svg";
        }
        else {
            //close
            $(this).delay(200).animate(
                {opacity:1,height:'70'},700);
            $('.software-content').delay(750).hide(0);
            document.getElementById("arrow-software").src="images/ic_down_arrow.svg";
        }
    });

    $('body').scrollspy({ target: '#nav' })
}

$(document).ready(main);
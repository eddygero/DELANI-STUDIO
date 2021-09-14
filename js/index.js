$(document).ready(function() {
    $('.icon1').click(function() {
        $('#icon1').show();
        $(".icon1").hide();

    });
    $('#icon1').click(function() {
        $('.icon1').show();
        $("#icon1").hide();

    });
    $('.icon2').click(function() {
        $('#icon2').show();
        $(".icon2").hide();

    });
    $('#icon2').click(function() {
        $('.icon2').show();
        $("#icon2").hide();

    });

    $('.icon3').click(function() {
        $('#icon3').show();
        $(".icon3").hide();

    });
    $('#icon3').click(function() {
        $('.icon3').show();
        $("#icon3").hide();

    });


    $("form").submit(function(event) {
        if ($("input").val() === "") {
            alert('Enter valid data')
            return;
        }

        alert('Your message have been recevied')
        event.preventDefault();
        this.reset();
    });

    $('.work1').mouseenter(function() {
        $('.content-overlay_1').show();
        $('.content-details_1').show();
        $('.border').show();

    });
    $('.work1').mouseleave(function() {
        $('.content-overlay_1').hide();
        $('.content-details_1').hide();
        $('.border').hide();

    });
    $('.work2').mouseenter(function() {
        $('.content-overlay_2').show();
        $('.content-details_2').show();
        $('.border').show();

    });
    $('.work2').mouseleave(function() {
        $('.content-overlay_2').hide();
        $('.content-details_2').hide();
        $('.border').hide();

    });
    $('.work3').mouseenter(function() {
        $('.content-overlay_3').show();
        $('.content-details_3').show();
        $('.border').show();

    });
    $('.work3').mouseleave(function() {
        $('.content-overlay_3').hide();
        $('.content-details_3').hide();
        $('.border').hide();

    });
    $('.work4').mouseenter(function() {
        $('.content-overlay_4').show();
        $('.content-details_4').show();
        $('.border').show();

    });
    $('.work4').mouseleave(function() {
        $('.content-overlay_4').hide();
        $('.content-details_4').hide();
        $('.border').hide();

    });
    $('.work5').mouseenter(function() {
        $('.content-overlay_5').show();
        $('.content-details_5').show();
        $('.border').show();

    });
    $('.work5').mouseleave(function() {
        $('.content-overlay_5').hide();
        $('.content-details_5').hide();
        $('.border').hide();

    });
    $('.work6').mouseenter(function() {
        $('.content-overlay_6').show();
        $('.content-details_6').show();
        $('.border').show();

    });
    $('.work6').mouseleave(function() {
        $('.content-overlay_6').hide();
        $('.content-details_6').hide();
        $('.border').hide();

    });
    $('.work7').mouseenter(function() {
        $('.content-overlay_7').show();
        $('.content-details_7').show();
        $('.border').show();

    });
    $('.work7').mouseleave(function() {
        $('.content-overlay_7').hide();
        $('.content-details_7').hide();
        $('.border').hide();

    });
    $('.work8').mouseenter(function() {
        $('.content-overlay_8').show();
        $('.content-details_8').show();
        $('.border').show();

    });
    $('.work8').mouseleave(function() {
        $('.content-overlay_8').hide();
        $('.content-details_8').hide();
        $('.border').hide();

    });
});
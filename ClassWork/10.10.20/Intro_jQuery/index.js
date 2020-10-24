$(document).ready(function() {

    $('#clearAll').click(function() {
        $('body').remove()
    })

    $('.btns')
        .css('width', '100px')
            .wrap('<div>')
    $('#btn').click(function() {
        $('#kv').css({'width':'100px','height':'100px','background-color':'green'})
    })
    $('#showBtn').click(function() {
        $('#someDiv').slideDown()
    })
    $('#hideBtn').click(function() {
        $('#someDiv').slideUp()
    })

    $('#hideshowBtn').click(function() {
        $('#someDiv').toggle()
    })
    $('#someDiv').wrap('<span>');



    $('.card').click(function() {
        $('#boyan .card .content').slideUp()
        $(this).children('.content').slideToggle()
    })


    $('.content').append('<div>Kvadrat</div>')
});
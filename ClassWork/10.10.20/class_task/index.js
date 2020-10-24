$(document).ready(function () {

    let flag = true
    $('.elem').click(function () {
        if (flag == true) {
            $(this).children('button').addClass('btn')
            $('button').attr("disabled", true)
            $(this).children('button').attr("disabled", false)
            flag = false
        }
        else {
            $(this).children('button').removeClass('btn')
            $('button').attr("disabled", false)
            flag = true
        }
    })
})
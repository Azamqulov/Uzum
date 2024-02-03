$(document).ready(function () {
    $('.option').click(function(){
        $('.davlat').toggle().hide()
    })

    $('.loading').fadeOut()

    $('.korish').click(function (){
        $('.block-cards').addClass('hide')
        $('.yopish').addClass('hide')
        $(this).add().hide()
    })
    $('.yopish').click(function (){
        $('.block-cards').removeClass('hide')
        $(this).remove().hide()
        $('.korish').hide().remove()

    })
})
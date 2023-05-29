$('.burger-btn').on('click', function(){
    $('.burger-btn,.burger').toggleClass('active');
})


$('.offer__btn, .menu__item_link_modal').on('click', function(){
$('.overlay, .modal-contacts').removeClass('d-none')
});
$('.modal-close, .overlay').click(function(){
$('.overlay, .modal-contacts').addClass('d-none')
})
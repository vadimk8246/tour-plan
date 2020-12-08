$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
  enabled: true,
  },
  effect:"fade",
})

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
   },
  })

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function (){
    document.querySelector(".nav-wrapper").classList.toggle('nav-wrapper__visible')
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  // Открытие модального окна при нажатии на кнопку
  function openModal(){
    var modalOverlay = $ (".modal__overlay");
    var modalDialog = $ (".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  };

  // Закрытие модального окна с помощью крестика
  function closeModal(event){
    event.preventDefault();
    var modalOverlay = $ (".modal__overlay");
    var modalDialog = $ (".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  //Закрытие модального окна нажатием Escape
  function closeEscape(e){
    if (e.key == 'Escape'){
        closeModal(event)
    }
  }
  document.onkeydown = closeEscape


  // Обработка форма
  $(".form").each(function () {
    $(this).validate({
    errorClass:"invalid",
    messages: {
      name: {
        required:"Please specify your name",
      },
      modemail: {
        required: "We need your email address to contact you",
        modemail: "Your email address must be in the format of mail@domain.com",
      },
      search:{
        required:""
      },
      
    },
  });
  })


  $('.input__phone').mask('+7 (000) 000-0000')
});
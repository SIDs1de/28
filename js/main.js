$(document).ready(function () {

  $(".header__burger").click(function () {
    $(this).children().toggleClass("active");
    $(".header__item").toggleClass("active");
    $("body").toggleClass("active");
    return false;
  });

  $(".faq__header").click(function () {
    $(".faq__body").not($(this).next()).slideUp();
    $(".faq__header").not($(this)).removeClass("active");

    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });

  var sections = $("section"),
    nav = $(".header"),
    nav_height = nav.outerHeight();


  $(".header__nav li a").click(function () {
    $("body").removeClass("active");
    $(".header__item").removeClass("active");
    $(".header__burger button").removeClass("active");
  });

  $(function () {
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("+7(999)999-99-99");
  });

  const replaceContent = () => {
    const btn = document.querySelector('.showcase__btns-wrapper .showcase__btn.showcase__btn--active');
    const num = parseInt(btn.getAttribute('data-content'));
    const types = document.querySelectorAll('.type');

    if (num === 1) {
      types[0].classList.remove('type--false')
      types[1].classList.add('type--false')
    } else {
      types[1].classList.remove('type--false')
      types[0].classList.add('type--false')
    }
  }

  const btns = document.querySelectorAll('.showcase__btns-wrapper .showcase__btn');
  const dns = document.querySelectorAll('._dn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(btn => {
        btn.classList.remove('showcase__btn--active')
      })
      const num = parseInt(btn.dataset.content);
      const currentBtns = document.querySelectorAll(`.showcase__btns-wrapper .showcase__btn[data-content="${num}"]`);
      currentBtns.forEach(cb => {
        cb.classList.add('showcase__btn--active')
      })
      dns.forEach(dn => {
        dn.classList.remove('_dn')
      })
      const wrappers = document.querySelectorAll('.showcase__btns-wrapper');
      wrappers.forEach(wrapper => {
        wrapper.classList.add('no-anim')
        $('.mfp-close').click()
      })
      replaceContent();
      const fromTop1 = document.querySelector('#company1').offsetTop;
      const fromTop2 = document.querySelector('#company2').offsetTop;
      const headerSize = document.querySelector('.header').scrollHeight;
      window.scroll({
        top: document.querySelectorAll('.type')[1].classList.contains('type--false') ? fromTop1 - headerSize : fromTop2 - headerSize,
        behavior: 'smooth'
      })
    })
  })
});

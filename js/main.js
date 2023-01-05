$(document).ready(function () {

  $(".animsition").animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out',
    inDuration: 500,
    outDuration: 200,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function (url) { window.location.href = url; }
  });

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

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("li a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });

  nav.find("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height,
      },
      500
    );

    return false;
  });

  $(".footer__nav li a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height,
      },
      500
    );

    return false;
  });

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

    if (num === 1) {
      document.querySelector('.company__title').innerHTML = `<p>Защита прав покупателей</p>`
    } else {
      document.querySelector('.company__title').innerHTML = `<p>Права продавца</p>`
    }
  }

  const btns = document.querySelectorAll('.showcase__btns-wrapper .showcase__btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(btn => {
        btn.classList.remove('showcase__btn--active')
      })
      btn.classList.add('showcase__btn--active')
      replaceContent();
    })
  })
});

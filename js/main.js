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
    const faqItems = document.querySelectorAll('.faq__items');
    const companyTitles = document.querySelectorAll('.company__title');
    const companyItems = document.querySelectorAll('.company__item');
    const pricesContainers = document.querySelectorAll('.price .container');

    if (num === 1) {
      companyTitles[0].classList.remove('company__title--false')
      companyTitles[1].classList.add('company__title--false')
      faqItems[0].classList.remove('faq__items--false')
      faqItems[1].classList.add('faq__items--false')
      companyItems[0].classList.remove('company__item--false')
      companyItems[1].classList.add('company__item--false')
      pricesContainers[0].classList.remove('container--false')
      pricesContainers[1].classList.add('container--false')
    } else {
      companyTitles[1].classList.remove('company__title--false')
      companyTitles[0].classList.add('company__title--false')
      faqItems[1].classList.remove('faq__items--false')
      faqItems[0].classList.add('faq__items--false')
      companyItems[1].classList.remove('company__item--false')
      companyItems[0].classList.add('company__item--false')
      pricesContainers[1].classList.remove('container--false')
      pricesContainers[0].classList.add('container--false')
    }
  }

  const btns = document.querySelectorAll('.showcase__btns-wrapper .showcase__btn');
  const dns = document.querySelectorAll('._dn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(btn => {
        btn.classList.remove('showcase__btn--active')
      })
      btn.classList.add('showcase__btn--active')
      dns.forEach(dn => {
        dn.classList.remove('_dn')
      })
      replaceContent();
    })
  })
});


/* <script src="//zero2one.ru/wp-content/player/playerjs.js" type="text/javascript"></script>
<div id="player"></div>

<script>
   var player = new Playerjs({id:"player", file:"//www.youtube.com/watch?v=AU4xpodJgj4"});
</script> */
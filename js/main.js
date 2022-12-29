$(document).ready(function () {
  $(".header__burger").click(function () {
    $(this).children().toggleClass("active");
    $(".header__item").toggleClass("active");
    $("body").toggleClass("active");
    return false;
  });

  $(".faq__header").click(function () {
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
    $(".header__burger a").removeClass("active");
  });

  $(function () {
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("+7(999)999-99-99");
  });
});

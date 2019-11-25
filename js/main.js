var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.7;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step);
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

$(function () {
    $(".show-less").on("click", function () {
        $(".show-less").toggleClass("d-hide"), $(".show-more").toggleClass("d-flex"), $(".articles__text-more").toggleClass("d-hide")
    })
}), $(function () {
    $(".show-more").on("click", function () {
        $(".show-less").toggleClass("d-hide"), $(".show-more").toggleClass("d-flex"), $(".articles__text-more").toggleClass("d-hide")
    })
}), $(function () {
    $("#button-first").on("click", function () {
        $(".article-first").addClass("display-b"), $(".article-first").removeClass("d-hide"), $(".article-sec").addClass("d-hide"), $(".article-sec").removeClass("display-b"), $(".article-third").addClass("d-hide"), $(".article-third").removeClass("display-b")
    })
}), $(function () {
    $("#button-sec").on("click", function () {
        $(".article-first").addClass("d-hide"), $(".article-first").removeClass("display-b"), $(".article-sec").addClass("display-b"), $(".article-sec").removeClass("d-hide"), $(".article-third").addClass("d-hide"), $(".article-third").removeClass("display-b")
    })
}), $(function () {
    $("#button-third").on("click", function () {
        $(".article-first").addClass("d-hide"), $(".article-first").removeClass("display-b"), $(".article-sec").addClass("d-hide"), $(".article-sec").removeClass("display-b"), $(".article-third").addClass("display-b"), $(".article-third").removeClass("d-hide")
    })
});
$(window).scroll(function() {
    $('header').toggleClass('scroll', $(this).scrollTop() > 0);
});
  
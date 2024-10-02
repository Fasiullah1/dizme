window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 200);
});

var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});

let percent = document.querySelectorAll('.progess_par');

percent.forEach((id) => {
    let value = id.innerHTML;
    id.style.width = `${value}%`;
    id.textContent = ' ';
    id.dataset.text = id.dataset.text + '%';
})

$('.owl-carousel').owlCarousel({
    items: 5,
    loop: true,
    margin: 3,
    merge: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    responsive: {
        678: {
            mergeFit: true
        },
        1000: {
            mergeFit: true
        }
    }
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});
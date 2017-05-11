jQuery(document).ready(function($) {

    //Actions for nav-bar
    $('.nav-target').each(function(index, el) {

        $(this).click(function(event) {
            event.preventDefault();

            var target_id = $(this).attr("href");

            $('.nav-target').removeClass('is-active');
            $(this).addClass('is-active');

            $('html, body').animate({
                scrollTop: $(target_id).offset().top
            }, 'slow');
        });
    });

    //Animations for show elements when scroll
    animateElements('.animation', 0);

    //Animate skills wall
    animateElements('.skills-container-img', 100);

    function animateElements(elementClass, delayIncrement) {
        var delay = 0;
        $(elementClass).each(function(index, el) {
            var element = $(this);
            $(element).css("opacity", 0);
            $(element).on('inview', function(event, visible) {
                if (visible) {
                    setTimeout(function(){
                        $(element).css("opacity", 1);
                        $(element).addClass($(element).data('animation'));
                    }, delay);
                    delay += delayIncrement;
                }
            });
        });
    }

    //Animation for the scrollToTop button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.scrollToTop').show();
        } else {
            $('.scrollToTop').hide();
        }
    });

    //Event for the scrollToTop button
    $('.scrollToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    //Create progressBar
    $('.progressBar').each(function(index, el) {
        var id = "#"+$(this).attr("id");
        var progressBar = createProgressBar($(this).data("value"), id);

        $(this).on('inview', function(event, visible) {
            if (visible) {
                progressBar.animate($(this).data("value")/100);
            }
        });
    });

    //Create progressCircle
    $('.progressCircle').each(function(index, el) {
        var id = "#"+$(this).attr("id");
        var progressCircle = createProgressCircle($(this).data("value"), id);

        $(this).on('inview', function(event, visible) {
            if (visible) {
                progressCircle.animate($(this).data("value")/100);
            }
        });
    });

    //Function for create progressBar
    function createProgressBar(value, id) {
        var bar = new ProgressBar.Line(id, {
            strokeWidth: 1,
            easing: 'easeInOut',
            duration: 1700,
            color: '#00b6f9',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'},
            text: {
                className: "progressBar-label",
                style: {
                    color: "#000000"
                },
                autoStyleContainer: false
            },
            from: {color: '#00b6f9'},
            to: {color: '#00b6f9'},
            step: (state, bar) => {
                var marginLeft = bar.value() * 100 - 2;
                $(id+" .progressBar-label").css("left", marginLeft+"%");
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });

        return bar;
    }

    //Function for create progressCircle
    function createProgressCircle(value, id) {
        var circle = new ProgressBar.Circle(id, {
            color: '#00b6f9',
            trailColor: '#eee',
            trailWidth: 10,
            duration: 2000,
            easing: 'bounce',
            strokeWidth: 10,
            from: {color: '#00b6f9', a:0},
            to: {color: '#00b6f9', a:1},
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                  circle.setText('');
                } else {
                  circle.setText(value+"%");
                }
            }
        });

        return circle;
    }
});

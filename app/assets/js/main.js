jQuery(document).ready(function($) {

    $('.progressBar').each(function(index, el) {
        var id = "#"+$(this).attr("id");
        var progressBar = createProgressBar($(this).data("value"), id);

        $(this).on('inview', function(event, visible) {
            if (visible) {
                $(this).parent().eq(0).css("opacity", 1);
                $(this).parent().eq(0).addClass('zoomIn');
                progressBar.animate($(this).data("value")/100);
            }
        });
    });

    $('.progressChart').each(function(index, el) {
        var id = "#"+$(this).attr("id");
        var progressChart = createProgressChart($(this).data("value"), id);

        $(this).on('inview', function(event, visible) {
            if (visible) {
                $(this).parent().eq(0).css("opacity", 1);
                $(this).parent().eq(0).addClass('zoomIn');
                progressChart.animate($(this).data("value")/100);
            }
        });
    });


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

    function createProgressChart(value, id) {
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

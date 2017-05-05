jQuery(document).ready(function($) {

    $('.progressBar').each(function(index, el) {
        var id = "#"+$(this).attr("id");
        var progressBar = createProgressBar($(this).data("value"), id);

        $(this).on('inview', function(event, visible) {
            if (visible) {
                $(this).css("opacity", 1);
                $(this).addClass('bounceInLeft');
                progressBar.animate($(this).data("value")/100);
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
          step: (state, bar) => {
            var marginLeft = bar.value() * 100 - 2;
            $(id+" .progressBar-label").css("left", marginLeft+"%");
            bar.setText(Math.round(bar.value() * 100) + ' %');
          }
        });

        return bar;
    }
});
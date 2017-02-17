// Shrink header on scroll.
(function($) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 250) {
            $('.navbar').addClass('sm');
        } else {
            $('.navbar').removeClass('sm');
        }
    });
})(jQuery);

// Site active classes and toggles.
(function($) {
    $(function() {
        $('[data-toggle="push"]').each(function() {
            var $this = $(this);

            var $target = $($this.data('target') || $this.attr('href') || '#navbar');
            var direction = $this.data('direction') || 'right';

            $target.addClass('navbar-push-' + direction);

            var $canvas = $($this.data('canvas') || '.canvas');
            $canvas.addClass('canvas-push');

            var $sidebar = $($this.data('sidebar') || 'body');

            $this.on('click', function(e) {
                $this.toggleClass('active');
                $target.toggleClass('active');
                $canvas.toggleClass('pushed-' + direction);
                $sidebar.toggleClass('sidebar-active');

            });

            $('.overlay').on('click', function(e) {
                $this.removeClass('active');
                $target.removeClass('active');
                $canvas.removeClass('pushed-' + direction);
                $sidebar.removeClass('sidebar-active');
            });

            $(window).on('resize', function(e) {
                var win = $(this);
                if (win.width() > 992) {
                    $this.removeClass('active');
                    $target.removeClass('active');
                    $canvas.removeClass('pushed-' + direction);
                    $sidebar.removeClass('sidebar-active');
                }
            });
        });
    });
})(jQuery);

// Prevents scroll.
(function($) {
    var fixed = document.getElementById('canvasy');

    fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

    }, false);
})(jQuery);




// (function($) {
//     $(function() {
//         $('[data-toggle="push"]').each(function() {
//             var $this = $(this);

//             var $target = $($this.data('target') || $this.attr('href') || '#navbar');
//             var direction = $this.data('direction') || 'right';

//             $target.addClass('navbar-push-' + direction);

//             var $canvas = $($this.data('canvas') || '.canvas');
//             $canvas.addClass('canvas-push');

//             var $sidebar = $($this.data('sidebar') || 'body');

//             $this.on('click', function(e) {
//                 adjustClass($this, $target, $canvas, $sidebar, direction, "toggle");
//             });

//             $('.overlay').on('click', function(e) {
//                 adjustClass($this, $target, $canvas, $sidebar, direction);
//             });

//             $(window).on('resize', function(e) {
//                 var win = $(this);
//                 if (win.width() > 992) {
//                     adjustClass($this, $target, $canvas, $sidebar, direction);
//                 }
//             });
//         });
//     });
// })(jQuery);


// function adjustClass($this, $target, $canvas, $sidebar, direction, adjustment) {
//     if (adjustment == "toggle") {
//         $this.toggleClass('active');
//         $target.toggleClass('active');
//         $canvas.toggleClass('pushed-' + direction);
//         $sidebar.toggleClass('sidebar-active');
//     } else {
//         $this.removeClass('active');
//         $target.removeClass('active');
//         $canvas.removeClass('pushed-' + direction);
//         $sidebar.removeClass('sidebar-active');
//     }
// }







    $(document).ready(function(){

        var events = [
            {
                date: 'January  1, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  10, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January 15 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  23, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  28,  2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            },
            {
                date: 'January  30, 2018',
                content: 'Lorem ipsum dolor'
            }
        ];

        $('#my-timeline').roadmap(events, {
            eventsPerSlide: 6,
            slide: 1,
            nextArrow: '<i class="fa fa-angle-right"></i>',
            prevArrow: '<i class="fa fa-angle-left"></i>'
        });




        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();


    });




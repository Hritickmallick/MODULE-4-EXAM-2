(function ($, Drupal, once) {
    Drupal.behaviors.myModuleBehavior = {

        attach: function (context, settings) {

            // Apply the myCustomBehaviour effect to the elements only once.

            $('.design-1').click(function () {
                $('.design-1 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            $('.design-2').click(function () {
                $('.design-2 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            $('.design-3').click(function () {
                $('.design-3 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            $('.design-4').click(function () {
                $('.design-4 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            $('.design-5').click(function () {
                $('.design-5 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            $('.design-6').click(function () {
                $('.design-6 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            $('.design-7').click(function () {
                $('.design-7 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            $('.design-8').click(function () {
                $('.design-8 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            $('.design-9').click(function () {
                $('.design-9 .views-field-nothing').toggleClass('show')
                $('.view-content').toggleClass('dark-bckgrnd')
               
            })

            
        }

    };

})(jQuery, Drupal, once);
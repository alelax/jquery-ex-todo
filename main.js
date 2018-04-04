$(document).ready(function() {

    $('.delete').click(function() {
        $(this).parent().children('.text').hide();
        $(this).parent().children('.delete').hide();
        $(this).parent().children('h3').show(500).hide(2000, function() {
            $(this).parent().hide();
        });
    });

});

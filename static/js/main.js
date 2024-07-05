$(document).ready( function() {
    
    let counter = 0
    $('[data-notification=""]').each( function(index) {
        console.log( $(this).attr("data-visited") );
        if ($(this).attr("data-visited") == "false")
        {
            counter++;
        }
    })
    $("#unreadCounter").html(counter)

    $("#markReadBtn").click( function() {
        
        // console.log( $('[data-notification=""]') )
        $('[data-notification=""]').each( function(index) {
            $(this).attr("data-visited","true");
        })
        $("#unreadCounter").html(0)
    });
} );
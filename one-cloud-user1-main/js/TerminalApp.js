function Terminal() {
    // Create the terminal app HTML structure


    // Append the terminal app to the #Apps container
    $("#Apps").append(app);

    // Make the entire window draggable
    $('#TerminalApp').draggable({
        handle: ".window__topbar",  // Use the top bar for dragging
        zIndex: 100,
        start: function() {
            $(".frameOverlay").fadeIn("fast");
        },
        stop: function() {
            $(".frameOverlay").fadeOut("fast");
        }
    });
}

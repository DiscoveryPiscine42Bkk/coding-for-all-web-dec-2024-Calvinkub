$(document).ready(function() {
    const colors = ['red', 'green', 'blue'];
    let currentSize = 200;
    let colorIndex = 0;
    const maxSize = 420;
    const minSize = 200;

    // Function to change the balloon color
    function changeColor() {
        colorIndex = (colorIndex + 1) % colors.length;
        $('#balloon').css('background-color', colors[colorIndex]);
    }

    // Function to grow the balloon
    function growBalloon() {
        if (currentSize < maxSize) {
            currentSize += 10;
            if (currentSize > maxSize) {
                currentSize = 200;
            }
        } else {
            // Explode and reset balloon size
            currentSize = 200;
        }
        $('#balloon').css({
            'width': currentSize + 'px',
            'height': currentSize + 'px'
        });
        changeColor();
    }

    // Function to shrink the balloon when the mouse leaves
    function shrinkBalloon() {
        if (currentSize > minSize) {
            currentSize -= 5;
        }
        $('#balloon').css({
            'width': currentSize + 'px',
            'height': currentSize + 'px'
        });
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        $('#balloon').css('background-color', colors[colorIndex]);
    }

    // Add event listeners using jQuery
    $('#balloon').click(growBalloon);
    $('#balloon').mouseleave(shrinkBalloon);
});

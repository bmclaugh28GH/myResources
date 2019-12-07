
// **********************************************
// jQuery CDN
// **********************************************

<script
   src="https://code.jquery.com/jquery-3.4.1.min.js"
   integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
   crossorigin="anonymous"></script>

// **********************************************
// Put everything in a document-ready. It ensures that all the elements have been loaded before
// code starts running
// **********************************************

$(document).ready(function() {

// **********************************************
// animate API. You can grab a reference to an IMG (other elements?), and move it around, change its
// visual attributes, etc.
// opacity: 1=fully visible, 0=invisible.
// move (top): note the += and -= to adjust the position.
// move: slow/normal at the end indicates how quickly the attribute changes.
// **********************************************

            $("#invisible").on("click", function () {
                captP.animate({opacity: "0.1"});
            });

            $("#up-btn").on("click", function () {
                //captP.animate({ top: "-=200px" }, "normal");
                captP.animate({top: "-=200px"}, "slow");
            });




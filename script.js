// script.js - small interactive feature with an intentional JS error


document.addEventListener('DOMContentLoaded', function() {
var btn = document.getElementById('darkToggle');
if (btn) {
// INTENTIONAL JS ERROR: function name mismatched (should be toggleDark)
btn.addEventListener('click', toggledark);
}
});


function toggleDark() {
document.body.classList.toggle('dark-mode');
}


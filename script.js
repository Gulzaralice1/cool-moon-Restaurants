// function animateCounters(start, end, duration) {
//     const counters = document.querySelectorAll('.counter');
//     counters.forEach(counter => {
//         let stepTime = Math.abs(Math.floor(duration / (end - start)));
//         let current = start;
//         let timer = setInterval(() => {
//             current++;
//             counter.textContent = current;
//             if (current === end) {
//                 clearInterval(timer); 
//             }
//         }, stepTime);
//     });
// }

// // Call the function
// animateCounters(0, 501, 3000);
// $(document).ready(function() {

//     $('.counter').each(function () {
//     $(this).prop('Counter',0).animate({
//     Counter: $(this).text()
//     }, {
//     duration: 4000,
//     easing: 'swing',
//     step: function (now) {
//     $(this).text(Math.ceil(now));
//     }
//     });
//     });
    
//     });

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
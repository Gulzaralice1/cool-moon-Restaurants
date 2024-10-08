function animateCounters(start, end, duration) {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        let stepTime = Math.abs(Math.floor(duration / (end - start)));
        let current = start;
        let timer = setInterval(() => {
            current++;
            counter.textContent = current;
            if (current === end) {
                clearInterval(timer); 
            }
        }, stepTime);
    });
}

// Call the function
animateCounters(0, 501, 3000);

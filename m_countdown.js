function startCountdown(waitTime, $element) {
    let milliseconds = 0;

    // Update countdown every 10 milliseconds
    let countdownInterval = setInterval(function() {
      if (waitTime > 0 || milliseconds > 0) {
        if (milliseconds === 0) {
          waitTime--; // Decrement seconds when milliseconds reach 0
          milliseconds = 99; // Reset milliseconds
        } else {
          milliseconds--; // Decrement milliseconds
        }

        // Display the time in seconds.milliseconds format
        $element.text(waitTime + '.' + (milliseconds < 10 ? '0' + milliseconds : milliseconds));
      } else {
        clearInterval(countdownInterval);
        $element.text(''); // Clear the countdown after time is up
      }
    }, 10); // Set interval to 10 milliseconds
  }
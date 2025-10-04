
    const startDate = new Date("September 5, 2025 22:00:00").getTime();

    function updateCounter() {
      const now = new Date().getTime();
      const diff = now - startDate;

      if (diff < 0) {
        document.getElementById("counter").innerHTML = "That date is in the future!";
        return;
      }

      // Time calculations
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("counter").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s since Jakob was last seen (at Youth Group)`;
    }

    // Update every second
    setInterval(updateCounter, 1000);
    updateCounter(); // run immediately

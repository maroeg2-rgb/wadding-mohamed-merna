const weddingDate = new Date("may15, 2026 00:00:00").getTime();

const x = setInterval(function() {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML =
    days + " Days Left ❤️";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's Wedding Day 🎉";
  }
}, 1000);

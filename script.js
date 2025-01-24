document.addEventListener("DOMContentLoaded", function () {
  const gif = document.getElementById("birthday-gif");
  const birthdayMessage = document.getElementById("birthday-message");
  const birthdayMusic = document.getElementById("birthday-music"); // Müzik elementini alıyoruz

  // GIF'e tıklandığında
  gif.addEventListener("click", function () {
    // Mesaj ve kalpleri göster
    birthdayMessage.style.display = "block";
    
    // Müzik çalmaya başla
    birthdayMusic.play();
    
    // GIF'i değiştir
    gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzk5NXlmZW83Yjl1NWFtYzZlaDBrbWxxMjMwM2FwazFlMGZwN2czayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7n91oN4DySTNaNihfn/giphy.gif";
    
    // Kalpleri ve balonları rastgele hareket ettir
    let heartElements = document.querySelectorAll(".heart");
    heartElements.forEach(heart => {
      const randomX = Math.random() * 200 - 100;  // -100 ile +100 arasında rastgele
      const randomY = Math.random() * 200 - 100;
      heart.style.setProperty('--random-x', `${randomX}px`);
      heart.style.setProperty('--random-y', `${randomY}px`);
    });

    let balloonElements = document.querySelectorAll(".balloon");
    balloonElements.forEach(balloon => {
      const randomX = Math.random() * 200 - 100;  // -100 ile +100 arasında rastgele
      const randomY = Math.random() * 200 - 100;
      balloon.style.setProperty('--random-x', `${randomX}px`);
      balloon.style.setProperty('--random-y', `${randomY}px`);
    });
  });
});


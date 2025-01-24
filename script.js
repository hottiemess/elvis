document.addEventListener("DOMContentLoaded", function () {
  const gif = document.getElementById("birthday-gif");
  const birthdayMessage = document.getElementById("birthday-message");
  const heartsContainer = document.getElementById("hearts");

  // GIF'e tıklama olayı
  gif.addEventListener("click", function () {
    // Mesaj ve kalpleri göster
    birthdayMessage.style.display = "block";

    // Arka planı değiştirme
    document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/026/942/434/large_2x/vivid-birthday-cake-background-free-photo.jpg')";
    document.body.style.backgroundSize = "cover";  // Arkaplanın boyutunu kapsayacak şekilde ayarla
    document.body.style.backgroundPosition = "center"; // Ortalanmış arka plan

    // Kalpleri ekranın her yerine yerleştir
    for (let i = 0; i < 50; i++) {  // 50 tane kalp ekle
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "❤️";
      heart.style.left = `${Math.random() * 100}vw`; // X konumunu rastgele
      heart.style.animationDuration = `${Math.random() * 5 + 3}s`; // Rastgele hız
      heart.style.fontSize = `${Math.random() * 3 + 2}em`; // Rastgele boyut
      heartsContainer.appendChild(heart);
    }

    // SoundCloud müziğini başlat
    const soundCloudPlayer = document.querySelector("iframe");
    soundCloudPlayer.contentWindow.postMessage('{"method":"play"}', '*');
  });
});





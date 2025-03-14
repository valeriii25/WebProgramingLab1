let isPink = true;

function toggleHitText(id) {
  var elem = document.getElementById(id);
  if (elem.style.display === "none" || elem.style.display === "") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleBackground() {
  if (isPink) {
    // Переключаем фон на нежно-желтый градиент
    document.body.style.background = 'linear-gradient(45deg, #ffffe0, #fffacd)';
    // Меняем фон всех кнопок на оранжевый
    document.querySelectorAll("button").forEach((btn) => {
      btn.style.background = "#ffa500";
      btn.style.color = "white";
    });
    // Меняем фон заголовка на нежно-оранжевый
    document.querySelector("header").style.background = "rgba(255, 218, 185, 0.5)";
    document.querySelectorAll(".hit-text").forEach((txt) => {
        txt.style.background = "rgba(255, 218, 185, 0.5)";
        txt.style.borderLeft = "3px solid #ffa500";
    });
    document.querySelector(".bio-container").style.background = "rgba(255, 218, 185, 0.5)";
    document.querySelector(".career-container").style.background = "rgba(255, 218, 185, 0.5)";
  } else {
    // Возвращаем розовые оттенки для фона
    document.body.style.background = 'linear-gradient(45deg, #ffc0cb, #ff69b4)';
    document.querySelectorAll("button").forEach((btn) => {
      btn.style.background = "#ff69b4";
      btn.style.color = "white";
    });
    // Возвращаем прозрачный фон заголовка
    document.querySelector("header").style.background = "rgba(255, 182, 193, 0.5)";
    document.querySelectorAll(".hit-text").forEach((txt) => {
        txt.style.background = "rgba(255, 240, 245, 0.8)";
        txt.style.borderLeft = "3px solid #ff69b4";
    });
    document.querySelector(".bio-container").style.background = "rgba(255, 240, 245, 0.8)";
    document.querySelector(".career-container").style.background = "rgba(255, 240, 245, 0.8)";
  }
  isPink = !isPink;
}

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
    // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
    document.body.classList.toggle("dark-theme");
  });
  

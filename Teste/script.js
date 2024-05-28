let timeoutId; // Variável para armazenar o ID do timeout

function showOptions() {
  clearTimeout(timeoutId); // Limpa o timeout existente, se houver
  document.getElementById("optionsBox").style.display = "block";
}

function hideOptions() {
  // Define um timeout para ocultar as opções depois de 300 milissegundos (ou 0.3 segundos)
  timeoutId = setTimeout(function() {
    document.getElementById("optionsBox").style.display = "none";
  }, 300);
}

// Adiciona um evento de mouseleave na caixa de opções para que ela continue visível enquanto o mouse estiver sobre ela
document.getElementById("optionsBox").addEventListener("mouseleave", function() {
  hideOptions();
});

// Adiciona um evento de mouseenter na caixa de opções para cancelar o timeout quando o mouse entrar nela
document.getElementById("optionsBox").addEventListener("mouseenter", function() {
  clearTimeout(timeoutId); // Limpa o timeout existente, se houver
});

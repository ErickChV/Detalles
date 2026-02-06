onload = () => {
  document.body.classList.remove("container");
};
function acceptLove() {
  // ocultar pregunta y botones
  document.getElementById('quiz-section').classList.add('hidden');
  // mostrar mensajes
  const finalSection = document.getElementById('vaca-section');
  finalSection.classList.remove('hidden');
  //mensaje final
  console.log("¡Compromiso aceptado! ❤️");
}

function thinkAgain() {
  // mensaje del NO
  const retryText = document.getElementById('retry-text');
  retryText.style.display = 'block';
  
  // Reducir tamaño del NO
  const btnNo = document.querySelector('.btn-no');
  const currentScale = btnNo.style.transform.replace(/[^0-9.]/g, '') || 1;
  btnNo.style.transform = `scale(${currentScale * 0.9})`;
}

let rot = 0;
tick();

function tick() {
  requestAnimationFrame(tick);
  rot += 0.02;
  document.body.style.setProperty("--rot", `${rot}deg`);
}
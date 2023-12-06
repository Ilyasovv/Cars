function setScrollBy() {
  window.scrollBy(0, 695);
  const winSCrBy = window.pageXOffset;
}
function e() {
  window.scrollBy(0, 1000);
  const winSRlBy = window.pageXOffset;
}
const click = document.getElementById("menu-click");
click.addEventListener("click", e);

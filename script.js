//for the page to fully load
window.addEventListener("load", () => {
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".close-btn");
  const cancelBtn = document.getElementById("cancelBtn");

  //to show the popup when the site loads
  popup.computedStyleMap.display = "block";

  //closing the popup window if user clicks X or Cancel
  close.Btn.addEventListener("click", ()=> {
    popup.computedStyleMap.display = "none";
  });

  cancelBtn.Btn.addEventListener("click", () => {
    popup.computedStyleMap.display = "none";
  });
});
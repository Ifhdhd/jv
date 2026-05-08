/*
|--------------------------------------------------------------------------
| LOADING CONTROL (SMOOTH + NO LAG)
|--------------------------------------------------------------------------
*/

function showLoading(){
  // kalau sudah ada, jangan bikin lagi
  if(document.getElementById("loadingOverlay")) return;

  const div = document.createElement("div");
  div.className = "loading";
  div.id = "loadingOverlay";

  div.innerHTML = `
    <div class="loading-content">
      <div class="spinner"></div>
      <div class="loading-text">Loading...</div>
    </div>
  `;

  document.body.appendChild(div);

  // biar fade in
  setTimeout(() => {
    div.classList.add("show");
  }, 10);
}

function hideLoading(){
  const el = document.getElementById("loadingOverlay");
  if(!el) return;

  el.classList.remove("show");

  setTimeout(()=>{
    el.remove();
  }, 300); // kasih waktu animasi fade out
}

/*
|--------------------------------------------------------------------------
| REDIRECT (LEBIH RESPONSIVE)
|--------------------------------------------------------------------------
*/

function goAutoFeedback(){

  showLoading();

  // langsung redirect, gak usah kelamaan
  setTimeout(()=>{
    window.location.href =
      "https://auto-feedback-backend.onrender.com";
  }, 300);

}

function goSchedule(){

  showLoading();

  setTimeout(()=>{
    window.location.href =
      "https://autofeedback-backend.onrender.com/";
  }, 300);

}

/*
|--------------------------------------------------------------------------
| PAGE LOAD (NO LOADING ON REFRESH)
|--------------------------------------------------------------------------
*/

window.onload = () => {
  // kosong → biar reload gak ada loading
};

/*
|--------------------------------------------------------------------------
| LOADING CONTROL
|--------------------------------------------------------------------------
*/

function showLoading(){
  let existing = document.getElementById("loadingOverlay");
  if(existing) existing.remove();

  const div = document.createElement("div");
  div.className = "loading show";
  div.id = "loadingOverlay";

  div.innerHTML = `
    <div class="loading-content">
      <div class="spinner"></div>
      <div class="loading-text">INITIALIZING SYSTEM...</div>
    </div>
  `;

  document.body.appendChild(div);
}

function hideLoading(){
  const el = document.getElementById("loadingOverlay");
  if(el) el.remove();
}

/*
|--------------------------------------------------------------------------
| REDIRECT (FIX)
|--------------------------------------------------------------------------
*/

function goAutoFeedback(){
  showLoading();

  setTimeout(()=>{
    window.location.href = "https://auto-feedback-backend.onrender.com";
  }, 600);
}

function goSchedule(){
  showLoading();

  setTimeout(()=>{
    window.location.href = "https://autofeedback-backend.onrender.com/";
  }, 600);
}

/*
|--------------------------------------------------------------------------
| FORCE FIX (kalau loading nyangkut)
|--------------------------------------------------------------------------
*/

window.addEventListener("load", () => {
  hideLoading(); // pastikan bersih
});

/*
|--------------------------------------------------------------------------
| DEBUG (optional)
|--------------------------------------------------------------------------
*/

console.log("App.js loaded ✅");

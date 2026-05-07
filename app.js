/*
|--------------------------------------------------------------------------
| LOADING CONTROL
|--------------------------------------------------------------------------
*/

function showLoading(){
  const div = document.createElement("div");
  div.className = "loading";
  div.id = "loadingOverlay";

  div.innerHTML = `
    <div class="spinner"></div>
  `;

  document.body.appendChild(div);
}

function hideLoading(){
  const el = document.getElementById("loadingOverlay");
  if(el) el.remove();
}

/*
|--------------------------------------------------------------------------
| REDIRECT
|--------------------------------------------------------------------------
*/

function goAutoFeedback(){

  showLoading();

  setTimeout(()=>{
    window.location.href =
      "https://auto-feedback-backend.onrender.com";
  }, 800); // delay dikit biar animasi keliatan

}

function goSchedule(){

  showLoading();

  setTimeout(()=>{
    window.location.href =
      "https://autofeedback-backend.onrender.com/";
  }, 800);

}

/*
|--------------------------------------------------------------------------
| PAGE LOAD (NO LOADING)
|--------------------------------------------------------------------------
*/

window.onload = () => {
  // sengaja kosong (biar gak ada loading pas reload)
};

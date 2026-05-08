/*
|--------------------------------------------------------------------------
| LOADING CONTROL
|--------------------------------------------------------------------------
*/

function showLoading(){
  let old = document.getElementById("loadingOverlay");
  if(old) old.remove();

  const div = document.createElement("div");
  div.id = "loadingOverlay";

  div.style.position = "fixed";
  div.style.inset = "0";
  div.style.background = "rgba(2,6,23,0.85)";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.zIndex = "9999";

  div.innerHTML = `
    <div style="
      width:60px;
      height:60px;
      border:4px solid rgba(255,255,255,.1);
      border-top:4px solid #22d3ee;
      border-radius:50%;
      animation:spin 1s linear infinite;
    "></div>
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

  setTimeout(() => {
    window.location.href = "https://auto-feedback-backend.onrender.com";
  }, 500);
}

function goSchedule(){
  showLoading();

  setTimeout(() => {
    window.location.href = "https://autofeedback-backend.onrender.com/";
  }, 500);
}

/*
|--------------------------------------------------------------------------
| INIT (PENTING)
|--------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {

  // optional: attach manual kalau onclick di HTML gagal
  const autoBtn = document.querySelector(".btn-auto");
  const scheduleBtn = document.querySelector(".btn-schedule");

  if(autoBtn){
    autoBtn.addEventListener("click", goAutoFeedback);
  }

  if(scheduleBtn){
    scheduleBtn.addEventListener("click", goSchedule);
  }

});

/*
|--------------------------------------------------------------------------
| ANIMATION STYLE (inject)
|--------------------------------------------------------------------------
*/

const style = document.createElement("style");
style.innerHTML = `
@keyframes spin{
  0%{ transform:rotate(0deg); }
  100%{ transform:rotate(360deg); }
}
`;
document.head.appendChild(style);

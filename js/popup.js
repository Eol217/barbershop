var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var modalClose = popup.querySelector('.modal-content-close');
var modalOverlay = document.querySelector('.modal-overlay');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');
var modalForm = popup.querySelector('form');
var storageLogin = localStorage.getItem('login');

function modalCloser(modal) {
  modal.classList.remove("modal-content-show");
  modalOverlay.classList.remove("modal-content-show");

  if (modal.classList.contains('modal-error')) {
    modal.classList.remove('modal-error');
  }
}

link.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.add("modal-content-show");
  modalOverlay.classList.add("modal-content-show");

  if (storageLogin) {
    login.value = storageLogin;
    password.focus()
  } else {
    login.focus();
  }
});

modalForm.addEventListener('submit', function(event){
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add('modal-error');
    // setTimeout(function() {popup.classList.remove('modal-error');}, 700);
  } else {
    localStorage.setItem('login', login.value);
  }
});

window/addEventListener('keydown', function(event) {
  if (event.keyCode === 27 && popup.classList.contains('modal-content-show')) {
    modalCloser(popup);
  }
})

modalClose.addEventListener('click', function(event){
  event.preventDefault();
  modalCloser(popup);
});


var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
  modalOverlay.classList.add("modal-content-show");
});
mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalCloser(mapPopup);
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      modalCloser(mapPopup);
    }
  }
});
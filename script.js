let state = {
  qr_expanded:false
}
const modal = document.getElementById('qr-modal');
document.getElementById('qr-code-link').addEventListener('click',growQr);

modal.addEventListener('click', shrinkQr);

function shrinkQr(){
  state.qr_expanded = false;
  modal.setAttribute('style', "display:none;")
}

function growQr(){
  state.qr_expanded= true;
  modal.setAttribute('style', "display:block;")
}


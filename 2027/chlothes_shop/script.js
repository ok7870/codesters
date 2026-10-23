const hats = [
  'https://i.imgur.com/qCcovAh.png',
  'https://i.imgur.com/Dti6XaW.png',
  'https://i.imgur.com/olUngKI.png',
  'https://i.imgur.com/FUDsDCv.png',
];

const shirts = [
  'https://i.imgur.com/eroo5Ca.png',
  'https://i.imgur.com/t7H8Anh.png',
  'https://i.imgur.com/HMZgFIt.png',
  'https://i.imgur.com/45mbBfu.png',
  'https://i.imgur.com/pOeRQzT.png',
  'https://i.imgur.com/iPcYyPu.png',
  'https://i.imgur.com/EpQLxDY.png',
  'https://i.imgur.com/d1Eh4co.png',
  'https://i.imgur.com/cJqfNn4.png',
];

const pants = [
  'https://i.imgur.com/TqKPjuX.png',
  'https://i.imgur.com/cQsuSin.png',
  'https://i.imgur.com/ZbRcAiV.png',
  'https://i.imgur.com/HKnIabB.png',
  'https://i.imgur.com/A3NDEyK.png',
  'https://i.imgur.com/ehKzHnk.png',
];

let current_hat = 1;
let current_shirt = 1;
let current_pants = 1;
function change_hat_R() {
  current_hat++;
  // Ensure the index stays within bounds
  if (current_hat < 0) {
    current_hat = hats.length - 1;
  } else if (current_hat >= hats.length) {
    current_hat = 0;
  }
  document.getElementById("image_hats").src = String(hats[current_hat]);
};

function change_hat_L() {
  current_hat--;
  // Ensure the index stays within bounds
  if (current_hat < 0) {
    current_hat = hats.length - 1;
  } else if (current_hat >= hats.length) {
    current_hat = 0;
  }
  document.getElementById("image_hats").src = String(hats[current_hat]);
};

function change_shirt_R() {
  current_shirt++;
  // Ensure the index stays within bounds
  if (current_shirt < 0) {
    current_shirt = shirts.length - 1;
  } else if (current_shirt >= shirts.length) {
    current_shirt = 0;
  }
  document.getElementById("image_shirts").src = String(shirts[current_shirt]);
};

function change_shirt_L() {
  current_shirt--;
  // Ensure the index stays within bounds
  if (current_shirt < 0) {
    current_shirt = shirts.length - 1;
  } else if (current_shirt >= shirts.length) {
    current_shirt = 0;
  }
  document.getElementById("image_shirts").src = String(shirts[current_shirt]);
};

function change_pants_R() {
  current_pants++;
  // Ensure the index stays within bounds
  if (current_pants < 0) {
    current_pants = pants.length - 1;
  } else if (current_pants >= pants.length) {
    current_pants = 0;
  }
  document.getElementById("image_pants").src = String(pants[current_pants]);
};

function change_pants_L() {
  current_pants--;
  // Ensure the index stays within bounds
  if (current_pants < 0) {
    current_pants = pants.length - 1;
  } else if (current_pants >= pants.length) {
    current_pants = 0;
  }
  document.getElementById("image_pants").src = String(pants[current_pants]);
};

function randomize() {
  current_hat = Math.floor(Math.random() * hats.length);
  current_shirt = Math.floor(Math.random() * shirts.length);
  current_pants = Math.floor(Math.random() * pants.length);
  document.getElementById("image_pants").src = String(pants[current_pants]);
  document.getElementById("image_hats").src = String(hats[current_hat]);
  document.getElementById("image_shirts").src = String(shirts[current_shirt]);
};
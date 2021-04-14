let score = [];
let topRight = score[2];
let topMid = score[1];
let topLeft = score[0];
let midRight = score[5];
let midMid = score[4];
let midLeft = score[3];
let botRight = score[8];
let botMid = score[7];
let botLeft = score[6];


function checkCat() {
  idArr = document.querySelectorAll('td');
  let boardCount = 0;
  for (let i = 0; i < idArr.length; i++) {
    console.log(boardCount);
    if (idArr[i].innerText === '0' || idArr[i].innerText === 'X') {
      boardCount+= 1;
    }
  }
  console.log(boardCount);
  if (boardCount === 9) {
    alert('The cat wins it!');
    resetBoard();
  }
}

function checkWin() {
  console.log(topLeft);
  if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
    alert(`${topLeft} wins it!`);
    resetBoard();
  }
  if (midLeft !== undefined && midLeft === midMid && midLeft === midRight) {
    alert(`${midLeft} wins it!`);
    resetBoard();
  }
  if (botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
    alert(`${botLeft} wins it!`);
    resetBoard();
  }
  if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
    alert(`${topLeft} wins it!`);
    resetBoard();
  }
  if (topMid !== undefined && topMid === midMid && topMid === botMid) {
    alert(`${topMid} wins it!`);
    resetBoard();
  }
  if (topRight !== undefined && topRight === midRight && topRight === botRight) {
    alert(`${topRight} wins it!`);
    resetBoard();
  }
  if (topLeft !== undefined && topLeft === midMid && topLeft === botRight) {
    alert(`${topLeft} wins it!`);
    resetBoard();
  }
  if (botLeft !== undefined && botLeft === midMid && botLeft === topRight) {
    alert(`${botLeft} wins it!`);
    resetBoard();
  }
}






function play(id) {
  const clickedOn = document.getElementById(id);
  const pspan = document.getElementById('player');
  if (clickedOn.innerText === "") {
    clickedOn.innerText = pspan.innerText;
    // score.splice(id, 0, pspan.innerText);
    score[id] = pspan.innerText;
    pspan.innerText != "X" ? pspan.innerText = "X" : pspan.innerText = "0";
    } else {
      null;
  };
  topRight = score[2];
  topMid = score[1];
  topLeft = score[0];
  midRight = score[5];
  midMid = score[4];
  midLeft = score[3];
  botRight = score[8];
  botMid = score[7];
  botLeft = score[6];
  console.log(score);
  checkWin();
  checkCat();

}

function resetBoard() {
  const pspan = document.getElementById('player');
  pspan.innerText = "X";
  idArr = document.querySelectorAll('td');
  for (let i = 0; i < idArr.length; i++) {
    idArr[i].innerText = '';
  }
  score = [];

}


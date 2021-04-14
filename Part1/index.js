let score = [];
const topRight = score[2];
const topMid = score[1];
const topLeft = score[0];
const midRight = score[5];
const midMid = score[4];
const midLeft = score[3];
const botRight = score[8];
const botMid = score[7];
const botLeft = score[6];

function checkWin() {
  if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
    alert(`${topLeft} wins it!`);
    return;
  }
  if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight) {
    alert(`${midLeft} wins it!`);
    return;
  }
  if (botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
    alert(`${botLeft} wins it!`);
    return;
  }
  if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
    alert(`${topLeft} wins it!`);
    return;
  }
  if (topMid !== undefined && topMid === midMid && topMid === botMid) {
    alert(`${topMid} wins it!`);
    return;
  }
  if (topRight !== undefined && topRight === midRight && topRight === botRight) {
    alert(`${topRight} wins it!`);
    return;
  }
  if (topLeft !== undefined && topLeft === midMid && topLeft === botRight) {
    alert(`${topLeft} wins it!`);
    return;
  }
  if (botLeft !== undefined && botLeft === midMid && botLeft === topRight) {
    alert(`${botLeft} wins it!`);
    return;
  }
}






function play(id) {
  const clickedOn = document.getElementById(id);
  const pspan = document.getElementById('player');
  if (clickedOn.innerText === "") {
    clickedOn.innerText = pspan.innerText;
    score.splice(id, 0, pspan.innerText);
    pspan.innerText != "X" ? pspan.innerText = "X" : pspan.innerText = "0";
    } else {
      null;
  };
  console.log(score);
  checkWin();
  if (score.length === 9) {
    alert('The cat won. :/'); 
    resetBoard();
  }
    else { 
      null;
    }
}

function resetBoard() {
  const pspan = document.getElementById('player');
  pspan.innerText = "X";
  topLeft.innerText = '';
  botLeft.innerText = '';
  midLeft.innerText = '';
  topRight.innerText = '';
  botRight.innerText = '';
  midRight.innerText = '';
  topMid.innerText = '';
  midMid.innerText = '';
  botMid.innerText = '';
  score = [];

}


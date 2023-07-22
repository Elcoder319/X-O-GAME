let title = document.querySelector(".title");
let turn = "x";
document.querySelector("input").onclick = function () {
  location.reload();
};
function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} winner`;
  document.getElementById("item" + num1).style.backgroundColor = "#000";
  document.getElementById("item" + num2).style.backgroundColor = "#000";
  document.getElementById("item" + num3).style.backgroundColor = "#000";
  
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3000);
}
let squares = [];
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] === squares[2] &&
    squares[2] === squares[3] &&
    squares[1] != ""
  ) {
    end(1, 2, 3);
  } else if (
    squares[4] === squares[5] &&
    squares[5] === squares[6] &&
    squares[5] != ""
  ) {
    end(4, 5, 6);
  } else if (
    squares[7] === squares[8] &&
    squares[8] === squares[9] &&
    squares[7] != ""
  ) {
    end(7, 8, 9);
  } else if (
    squares[1] === squares[4] &&
    squares[4] === squares[7] &&
    squares[7] != ""
  ) {
    end(1, 4, 7);
  } else if (
    squares[2] === squares[5] &&
    squares[5] === squares[8] &&
    squares[5] != ""
  ) {
    end(2, 5, 8);
  } else if (
    squares[3] === squares[6] &&
    squares[6] === squares[9] &&
    squares[6] != ""
  ) {
    end(3, 6, 9);
  } else if (
    squares[1] === squares[5] &&
    squares[5] === squares[9] &&
    squares[5] != ""
  ) {
    end(1, 5, 9);
  } else if (
    squares[3] === squares[5] &&
    squares[5] === squares[7] &&
    squares[7] != ""
  ) {
    end(3, 5, 7);
  } else {
    window.location.reload;
  }
}
function game(id) {
  let ele = document.getElementById(id);
  if (turn === "x" && ele.innerHTML === "") {
    ele.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn === "o" && ele.innerHTML === "") {
    ele.innerHTML = "o";
    title.innerHTML = "x";
    turn = "x";
  }

  winner();
}

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let randomBtnEl = document.getElementById("generateBtn");
let hasPassword = false;

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Clear fuction that clear the password result
function clear() {
  password1El.textContent = "";
  password2El.textContent = "";
}
//Render the password
randomBtnEl.addEventListener("click", function generate() {
  getPassword();
});

// GEt the 15 charators password
function getPassword() {
  if (!password1El.textContent && !password2El.textContent) {
    for (let i = 0; i < 15; i += 1) {
      let p1 = (password1El.textContent += getRandomCharector());

      password2El.textContent += getRandomCharector();
    }
  } else {
    clear();
    for (let i = 0; i < 15; i += 1) {
      password1El.textContent += getRandomCharector();
      password2El.textContent += getRandomCharector();
    }
  }
}

//Get the random charactors from the charactors array
function getRandomCharector() {
  let randomCharectorsIndex = Math.floor(Math.random() * characters.length);
  console.log(characters[randomCharectorsIndex]);
  return characters[randomCharectorsIndex];
}

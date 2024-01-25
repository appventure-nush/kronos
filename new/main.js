// hi

function generate(date) { // genedate(rate)
  
  // const spam yay
  const sidebar = document.querySelector("aside"); // not using IDs for fun
  const main = document.querySelector("main");
  const div = document.querySelector("div");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const side_table = document.querySelector("aside table");
  const side_thead = document.querySelector("aside thead");
  const side_tbody = document.querySelector("aside tbody");

  const wow = new Date(date);
  const y = wow.getFullYear();
  const m = wow.getMonth()+ +([]+[+!+[]]); // wow!
  const d = wow.getDate();
  const tarts = (() => { // start
    const _ = new Date(date);
    _.setDate(1);
    return _.getDay();
  })();
  const den = (() => { // end
    switch (m) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:  // february >:(
        // leap 🐸
        if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
          return 29;
        } else {
          return 28;
        }
    }
  })();

  console.log(y, m, d); // ok looks fine

  let tr, td;
  for (let i = 0; i < 35; i++) {
    let x = i % 7;
    let y = Math.floor(i / 7);
    if (!x) { // remember to eventually replace with x === 0
      tr = document.createElement("tr");
      side_tbody.appendChild(tr);
    }
    td = document.createElement("td");
    tr.appendChild(td);
    const number = i - tarts;
    if (number > 0 && number <= den) {
      td.innerHTML = `${number}`;
    } else {
      td.classList.add("disabled");
    }
    td.classList.add("spin");
  }

  tr = document.createElement("tr");
  side_thead.appendChild(tr);
  for (let i = 0; i < 7; i++) {
    td = document.createElement("th"); // not actually td shhh
    tr.appendChild(td);
    td.innerHTML = "mtwtfss"[i];
  }

  h1.textContent = "hi"; // h1 = hi
  p.textContent = "this is the sidebar";
  div.innerHTML = "lorem\n\n\n\n\n\n\n\n\n\n\n\nipsusm\n\n\n\n\n\n\n\n\n<br>\n\n\n\nlarge\ncalendar"; // answer is (always) 4 letters :)
  
};

window.addEventListener("load", function(event) {
  generate(new Date()); // for now
});
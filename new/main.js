// hi

const now = new Date();
const the_date = new Date();


function init() {

  const side_div = document.querySelector("aside > div");
  side_div.innerHTML = `
    <input type="button" value="←" class="left">
    <h1 style="display: inline-block; min-width: 7.5em;"></h1>
    <input type="button" value="→" class="right">
    <div style="left: -100px; top: -100px;" class="box"></div>
    <div style="left: -100px; top: -100px;" class="box box2"></div>
  `;

  document.querySelector("input[type=button].left").addEventListener("click", function(event) {
    the_date.setDate(1);
    the_date.setMonth(the_date.getMonth() - 1);
    generate(the_date);
  });

  document.querySelector("input[type=button].right").addEventListener("click", function(event) {
    the_date.setDate(1);
    the_date.setMonth(the_date.getMonth() + 1);
    generate(the_date);
  });

}


function generate(date, selecting = false) { // genedate(rate)
  
  // const spam yay
  const sidebar = document.querySelector("aside"); // not using IDs for fun
  const main = document.querySelector("main");
  const div = document.querySelector("main div");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const side_box = document.querySelector("aside div.box");
  const side_box2 = document.querySelector("aside div.box2");
  const side_table = document.querySelector("aside table");
  const side_thead = document.querySelector("aside thead");
  const side_tbody = document.querySelector("aside tbody");

  const wow = new Date(date);
  const y = wow.getFullYear();
  const m = wow.getMonth()+ +([]+[+!+[]]); // wow!
  const d = wow.getDate();
  const today_number = (now.getFullYear() === y && now.getMonth() === wow.getMonth()) ? now.getDate() : -192119;
  const tarts = (() => { // start
    const _ = new Date(date);
    _.setDate(1);
    return _.getDay();
  })();
  const den = [0, 31, 28 + ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m]; // 1 line?
  
  const m_string = ["null 💀", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][m];
  h1.innerHTML = `${m_string} ${y}`;
  if (!selecting) {
    // side_box.style.left = "-100px";
    // side_box2.style.left = "-100px";
    side_box.style.top = "-100px";
    side_box2.style.top = "-100px";
  }

  // console.log(y, m, d); // ok looks fine

  side_thead.innerHTML = "";
  side_tbody.innerHTML = "";

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
    const enabled = number > 0 && number <= den;
    if (enabled) {
      td.innerHTML = `${number}`;
    } else {
      td.innerHTML = "0";
      td.classList.add("disabled");
    }
    if (number === today_number) {
      td.classList.add("today");
    }
    const the_td = td;
    const mouseover_fn = (_) => {
      side_box2.style.left = `calc(${the_td.getBoundingClientRect().left + window.scrollX}px - 0.7em)`;
      side_box2.style.top = `calc(${the_td.getBoundingClientRect().top + window.scrollY}px - 0.7em)`;
    };
    const click_fn = (_) => {
      side_box.style.left = `calc(${the_td.getBoundingClientRect().left + window.scrollX}px - 0.7em)`;
      side_box.style.top = `calc(${the_td.getBoundingClientRect().top + window.scrollY}px - 0.7em)`;
      if (!enabled) {
        date.setDate(number);
        generate(date, true);
      }
    }
    the_td.addEventListener("mouseover", mouseover_fn);
    the_td.addEventListener("click", click_fn);
    if (number === d && selecting) {
      setTimeout(click_fn, 100);
    }
  }

  tr = document.createElement("tr");
  side_thead.appendChild(tr);
  for (let i = 0; i < 7; i++) {
    td = document.createElement("th"); // not actually td shhh
    tr.appendChild(td);
    td.innerHTML = "mtwtfss"[i];
    td.classList.add("spin");
  }

  p.textContent = "this is the sidebar";
  div.innerHTML = "lorem\n\n\n\n\n\n\n\n\n\n\n\nipsusm\n\n\n\n\n\n\n\n\n<br>\n\n\n\nlarge\ncalendar"; // answer is 4 letters :)
  
}


window.addEventListener("load", function(event) {
  init();
  generate(the_date, false); // still for now
});
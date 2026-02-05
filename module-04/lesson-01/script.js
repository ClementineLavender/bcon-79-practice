/* // Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};
const b1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
b1.onclick = fn1();

function fn1() {
  out1.innerHTML = obj1.two
}
// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

const b2 = document.querySelector(".b-2");
const out2 = document.querySelector("out-2");

b2.onclick = fn2;

function f2() {
  out2.textContent = obj2["five"];
}

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const b3 = document.querySelector(".b-3");
const out3 = document.querySelector(".our-3");

b3.onclick = fn3;

function fn3() {
  for (const key in obj3) {
    obj3[key] === "hi" ? (out3.innerHTML += obj3[key] + " ") : out3.innerHTML;
  }
}
 */
// Task 4
/* const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

// Task 5
const obj5 = {
  one: 1,
  two: 2,
}; */
/* 
function fn5(obj, selector) {
  let res = "";
  for (const key in object) {
    const value = object[key];
    res += `${key} : ${value} <br>`;
  }
  selector.innerHTML = res;
}

// Task 6
const b6 = document.querySelector(".b-6");
const out6 = document.querySelector(".our-6");
const input61 = document.querySelector(".i-61");
const input62 = document.querySelector(".i-62");
const obj6 = {
  b: 17,
  e: 22,
};

b6.onclick = fn6;

function fn6() {
  const key = input61.value;
  const value = input62.value;

  fn5 = (obj6, out6);
} */

//obj6[i61.value] = i62.value;

// Task 7
/* const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".our-7");
const input7 = document.querySelector(".i-7");
const obj7 = {
  b: 17,
  e: 22,
};
btn7.onclick = fn7();

function fn7() {
  let result = 0;
  const seaechKey = input7.value;
  for (const key in obj7) {
    if (seaechKey === key) {
      result = 1;
      break;
    }
  }
  out7.innerHTML = result;
} */

// Task 8
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const input8 = document.querySelector(".i-8");

const obj8 = {
  b: 17,
  e: 22,
};
btn8.onclick = fn8;

function fn8() {
  const searchKey = input8.value;
  let result = 0;
  for (const key in obj8) {
    if (searchKey === key) {
      result = obj8[key];
      break;
    }
  }
  out8.innerHTML = result;
} 
  
// Task 9

const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const input9 = document.querySelector(".i-9");
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};
btn9.onclick = fn9

function fn9() {
  const seaechValue = Number(input9.value);
  let result = "";
 for (const key in obj9) {
obj9[key] === seaechValue;
/* console.log(obj9[key] === seaechValue) */
/* console.log("🚀 ~ fn9 ~ obj9:", obj9[key]); */
   if (obj9[key] === seaechValue) {
 /*     console.log(key); */
     result += `${key} `;
   }
  }
  /* console.log(result); */
  out9.innerHTML = result;
}

/* b j */
// Task 10
const btn10 = document.querySelector(".b-10");
c10nst out10 = document.querySelector(".out-10");
btn10.onclick = fn10;

const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

// Task 16
const obj16 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};

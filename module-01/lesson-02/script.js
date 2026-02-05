//1
const a = 7;
const b = 9;
const result1 = a * b;
console.log(a * b);

//2
const c = 7;
const d = 9;
const out2 = document.querySelector(".out-2");
console.log("🚀 ~ out2:", out2);
out2.textContent = c / d;
//3
const e = 3;
const f = 5;
out3 = document.querySelector(".out-3");
out3.textContent = e + f;
console.log("🚀 ~ out3:", out3);
//4
e1 = "3";
f1 = 5;
const out4 = document.querySelector(".out-4");
out4.textContent = e1 + f1;

//5
e2 = 3;
f2 = 0;
out5 = document.querySelector(".out-5");
out5.textContent = e2 / f2;

//6
e3 = 3;
f4 = "Hello";
out6 = document.querySelector(".out-6");
out6.textContent = e3 + f4;

//7
e4 = 3;
f4 = "Hello";
out7 = document.querySelector(".out-7");
out7.textContent = e4 * f4;

//8

const inp8 = document.querySelector(".i-8");
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
btn8.onclick = fn8;

function fn8() {
  const userInput = inp8.value;
  out8.textContent = userInput;
  inp8.value = "";
}

//9

const inp9 = document.querySelector(".i-9");
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
btn9.onclick = fn9;

function fn9() {
  out9.textContent = inp9.value;
  inp9.value = "";
}

//10
const inp10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");
btn10.onclick = t10;

function t10() {
  out10.textContent = +inp10.value * 20;
  inp10.value;
  inp10.value = "";
}

//11
const inp11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");
const btn11 = document.querySelector(".b-11");

btn11.onclick = t11;

function t11() {
  out11.textContent = +inp11.value + 55;
  inp11.value = "";
}
//12
const inpName = document.querySelector(".i-12-1");
const inpSurname = document.querySelector(".i-12-2");
const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");

btn12.onclick = t12;

function t12() {
  out12.textContent = "Hello " + inpName.value + " " + inpSurname.value;
}

//13
const inp131 = document.querySelector(".i-13-1");
const inp132 = document.querySelector(".i-13-2");
const out13 = document.querySelector(".out-13");
const btn13 = document.querySelector(".b-13");

btn13.onclick = t13;

function t13() {
  const a = Number(inp131.value);
  const b = Number(inp132.value);

  out13.textContent = a + b;
}
//14
const btn14 = document.querySelector(".b-14");
const inp14 = document.querySelector(".i-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = t14;

function t14() {
  inp14.value = "Go";
}
//15
const btn15 = document.querySelector(".b-15");
const inp15 = document.querySelector(".i-15");

btn15.onclick = t15;

function t15() {
  inp15.style.border = "4px solid red";
}

//16
const inp16_1 = document.querySelector(".i-16-1");
const inp16_2 = document.querySelector(".i-16-2");
const out16 = document.querySelector(".out-16");
const btn16 = document.querySelector(".b-16");

btn16.onclick = t16;

function t16() {
  const a = +inp16_1.value;
  const b = +inp16_2.value;
  out16.textContent = a + b;
}

//17
const btn17 = document.querySelector(".b-17");
const inp17 = document.querySelector(".i-17");
const out17 = document.querySelector(".out-17-1");

btn17.onclick = t17;

function t17() {
  out17.textContent = Number.parseFloat(inp17.value);
  inp17.value = "";
}
//18
const btn18 = document.querySelector(".b-18");
const inp18 = document.querySelector(".i-18");
const out18 = document.querySelector(".out-18");

btn18.onclick = t18;
function t18() {
  const a = inp18.value;
  out18.textContent = parseFloat(a);
  inp18.value = "";
}

//19

const inp19_1 = document.querySelector(".i-19-1");
const inp19_2 = document.querySelector(".i-19-2");
const out19 = document.querySelector(".out-19");
const btn19 = document.querySelector(".b-19");

btn19.onclick = t19;

function t19() {
  out19.textContent =
    Number.parseInt(inp19_1.value) + Number.parseInt(inp19_2.value);
  inp19_1.value = "";
  inp19_2.value = "";
}

//20

const btn20 = document.querySelector(".b-20");
const inp20 = document.querySelector(".i-20");
const out20 = document.querySelector(".out-20");

btn20.onclick = t20;

let i = 0;

function t20() {
  /*   out20.textContent = ++i; */
  out20.textContent = `Clicks: ${++i}`;
}

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

let button = document.getElementById("btn");
let box = document.getElementById("box");

button.onclick = function () {
    let hld = input1.value.trim();
    let atd = input2.value.trim();
    let trt = input3.value.trim();
    if (hld === "" || atd === "" || trt === "") return;

//clears the box
    box.innerHTML = '';
    //creates a div with info


    let currentAttendance=(atd/hld*100);
    let epsilon = 0.0001; // Tolerance for floating-point comparison

    if (currentAttendance >= trt - epsilon) {
      let rpt5 = document.createElement("div");
      let rpt4 = document.createElement("div");
      let rpt6 = document.createElement("div");
      rpt5.className = "rpt";
      rpt4.className = "rpt";
      rpt6.className = "rpt";
      rpt5.textContent = `🎉 Congrats! 
      Your current attendance is ${currentAttendance.toFixed(1)}%, which meets or exceeds your target ${trt}%.`
      rpt4.textContent = `TIPS:
      "Cheers to consistent attendance!
      You're making progress and acheiving your goals KEEP IT UP".`
      rpt6.textContent = `FRIENDLY REMINDER:
      "Consistency is key to unlocking success."`
      box.appendChild(rpt5);
      box.appendChild(rpt4);
      box.appendChild(rpt6);

      input1.value = "";
      input2.value = "";
      input3.value = "";
    }
else{
  let rpt1 = document.createElement("div");
  let rpt2 = document.createElement("div");
  let rpt3 = document.createElement("div");
  let rpt4 = document.createElement("div");
             

  rpt1.className = "rpt";
  rpt2.className = "rpt";
  rpt3.className = "rpt";
  rpt4.className = "rpt";

  let trt1=trt/100;
  let answer1=(atd/hld*100);
  let ans1= answer1.toFixed(1);
  let ans2= hld-atd
  let answer3= (ans2/hld*100);
  let ans3=answer3.toFixed(1);
  let answer4= (trt1*ans2/1-trt1);
  let ans4=answer4.toFixed(0);

  rpt1.textContent = `CURRENT ATTENDANCE:  ${ans1}% 
  You have attended ${atd} classes out of ${hld} classes.`
  rpt2.textContent = `MISSED CLASSES:  ${ans2} classes  
 \tYou have lost ${ans3}% of your attendance.`
  rpt3.textContent = `CLASSES TO ATTENDED STILL:  ${ans4} 
  You need extra ${ans4} classes to reach your target attendance ${trt}%. `
  rpt4.textContent = `TIPS:
 \t"If you want to achieve something great, you have to show up first".`
  

  

  //append to box
  box.appendChild(rpt1);
  box.appendChild(rpt2);
  box.appendChild(rpt3);
  box.appendChild(rpt4);

  input1.value = "";
  input2.value = "";
  input3.value = "";
}
}

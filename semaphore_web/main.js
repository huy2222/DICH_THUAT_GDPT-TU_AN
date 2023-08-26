// khai báo nút nhấn
var button_1 = document.getElementById("bt_1");
var button_2 = document.getElementById("bt_2");
var button_3 = document.getElementById("bt_3");
var button_4 = document.getElementById("bt_4");
var button_5 = document.getElementById("bt_5");
var button_6 = document.getElementById("bt_6");
var button_7 = document.getElementById("bt_7");
var button_8 = document.getElementById("bt_8");
var button_9 = document.getElementById("bt_9");
// nút chức năng
var Send_bt = document.getElementById("send_value");
var Reset_btn = document.getElementById("reset_value");

var numbers = [];
var data_bt;
// hiện dữ liệu
var Showvalue = document.getElementById("show_value");
var Show_all_value = document.getElementById("show_all_value");

// mouseover di chuột vào là nhận giá trịv
var color_change_click = "rgb(21, 75, 45)"; // chỉnh lại màu cho đẹp nè
// line_btn
var w = 170; // rộng
var h = 170; // cao
var x = 0;
var y = 0;
function Value_bt_1() {
  numbers.push(button_1.value);
  Add_arr();
  Check_error();
  button_1.style.backgroundColor = `${color_change_click}`;
  x = 0;
  y = 0; 
  Line_btn(); 
}
button_1.addEventListener("click", Value_bt_1);

function Value_bt_2() {
  numbers.push(button_2.value);
  Add_arr();
  Check_error();
  button_2.style.backgroundColor = `${color_change_click}`;
  x = w/2;
  y = 0;
  Line_btn();

}
button_2.addEventListener("click", Value_bt_2);

function Value_bt_3() {
  numbers.push(button_3.value);
  Add_arr();
  Check_error();
  button_3.style.backgroundColor = `${color_change_click}`;
  x = w;
  y = 0;
  Line_btn();
}
button_3.addEventListener("click", Value_bt_3);

function Value_bt_4() {
  numbers.push(button_4.value);
  Add_arr();
  Check_error();
  button_4.style.backgroundColor = `${color_change_click}`;
  x = 0;
  y = h/2;
  Line_btn();
}
button_4.addEventListener("click", Value_bt_4);

function Value_bt_5() {
  numbers.push(button_5.value);
  Add_arr();
  Check_error();
  button_5.style.backgroundColor = `${color_change_click}`;
//   x = w;
//   y = 0;
//   Line_btn();
}
button_5.addEventListener("click", Value_bt_5);

function Value_bt_6() {
  numbers.push(button_6.value);
  Add_arr();
  Check_error();
  button_6.style.backgroundColor = `${color_change_click}`;
  x = w;
  y = h/2;
  Line_btn();
}
button_6.addEventListener("click", Value_bt_6);

function Value_bt_7() {
  numbers.push(button_7.value);
  Add_arr();
  Check_error();
  button_7.style.backgroundColor = `${color_change_click}`;
  x = 0;
  y = h;
  Line_btn();
}
button_7.addEventListener("click", Value_bt_7);

function Value_bt_8() {
  numbers.push(button_8.value);
  Add_arr();
  Check_error();
  button_8.style.backgroundColor = `${color_change_click}`;
  x = w/2;
  y = h;
  Line_btn();
}
button_8.addEventListener("click", Value_bt_8);

function Value_bt_9() {
  numbers.push(button_9.value);
  Add_arr();
  Check_error();
  button_9.style.backgroundColor = `${color_change_click}`;
  x = w;
  y = h;
  Line_btn();
}
button_9.addEventListener("click", Value_bt_9);

function Add_arr() {
  numbers.sort(function (a, b) {
    return a - b;
  }); // sắp xếp mảng
  var string = "";
  for (var i = 0; i < numbers.length; i++) {
    string = string + numbers[i];
  }
  data_bt = string;
}
function Check_error() {
  if (data_bt.length > 3) {
    alert("Yêu cầu nhập 3 kí tự");
    button_1.style.backgroundColor = "rgb(60,179,113)";
    button_2.style.backgroundColor = "rgb(60,179,113)";
    button_3.style.backgroundColor = "rgb(60,179,113)";
    button_4.style.backgroundColor = "rgb(60,179,113)";
    button_5.style.backgroundColor = "rgb(60,179,113)";
    button_6.style.backgroundColor = "rgb(60,179,113)";
    button_7.style.backgroundColor = "rgb(60,179,113)";
    button_8.style.backgroundColor = "rgb(60,179,113)";
    button_9.style.backgroundColor = "rgb(60,179,113)";
    numbers = [];
    data_bt = " ";
  }
}
function Click_change() {
  for (var i = 0; i < numbers.length; i++) {
    button_1.style.backgroundColor = "red";
    button_2.style.backgroundColor = "red";
    // console.log(`button_${numbers[i]}`)
  }
}

function Line_btn() {
    /*
  // kẻ đường viên nối button
  var line_connect = document.getElementById("myCanvas");
  var line_obj = line_connect.getContext("2d");

  line_obj.moveTo(w / 2, h / 2); // đầu
  line_obj.lineTo(x, y); // cuối

//   line_obj.moveTo(x / 2, y / 2); // đầu_mặc định
//   line_obj.lineTo(x / 2, 0); // cuối

  // độ rộng đường thẳng
  line_obj.lineWidth = 5;
  // màu line
  line_obj.strokeStyle = "yellow";
  // câu lệnh thực thi
  line_obj.stroke();
  */
}
function Delete_line_btn()
{
    /*
    var line_connect = document.getElementById("myCanvas");
    var line_obj = line_connect.getContext("2d");
  
    line_obj.moveTo(0, 0); // đầu
    line_obj.lineTo(0, 0); // cuối
    line_obj.save();
  //   line_obj.moveTo(x / 2, y / 2); // đầu_mặc định
  //   line_obj.lineTo(x / 2, 0); // cuối
  
    // độ rộng đường thẳng
    line_obj.lineWidth = 5;
    // màu line
    line_obj.strokeStyle = "yellow";
    // câu lệnh thực thi
    line_obj.stroke();

    line_obj.restore();*/
}
const anpha = [
  {
    id: 578,
    name: "A",
  },
  {
    id: 458,
    name: "B",
  },
  {
    id: 158,
    name: "C",
  },
  {
    id: 258,
    name: "D",
  },
  {
    id: 358,
    name: "E",
  },
  {
    id: 568,
    name: "F",
  },
  {
    id: 589,
    name: "G",
  },
  {
    id: 457,
    name: "H",
  },
  {
    id: 157,
    name: "I",
  },
  {
    id: 256,
    name: "J",
  },
  {
    id: 257,
    name: "K",
  },
  {
    id: 357,
    name: "L",
  },
  {
    id: 567,
    name: "M",
  },
  {
    id: 579,
    name: "N",
  },
  {
    id: 145,
    name: "O",
  },
  {
    id: 245,
    name: "P",
  },
  {
    id: 345,
    name: "Q",
  },
  {
    id: 456,
    name: "R",
  },
  {
    id: 459,
    name: "S",
  },
  {
    id: 125,
    name: "T",
  },
  {
    id: 135,
    name: "U",
  },
  {
    id: 259,
    name: "V",
  },
  {
    id: 356,
    name: "W",
  },
  {
    id: 359,
    name: "X",
  },
  {
    id: 156,
    name: "Y",
  },
  {
    id: 569,
    name: "Z",
  },
];

// data_bt: mã id của nội dung mình nhập vào( vd: 578)

var tmp = "";
var check_TF = false;

function Send() {
  for (let i = 0; i < anpha.length; i++) {
    if (data_bt == anpha[i].id) {
      console.log(anpha[i].name);
      Showvalue.value = anpha[i].name;
      tmp = tmp + anpha[i].name;
      Show_all_value.value = tmp;
      check_TF = true;
      break;
    }
  }
  if (!check_TF) {
    alert("Không có giá trị thõa mãn");
  }
  check_TF = false;

  button_1.style.backgroundColor = "rgb(60,179,113)";
  button_2.style.backgroundColor = "rgb(60,179,113)";
  button_3.style.backgroundColor = "rgb(60,179,113)";
  button_4.style.backgroundColor = "rgb(60,179,113)";
  button_5.style.backgroundColor = "rgb(60,179,113)";
  button_6.style.backgroundColor = "rgb(60,179,113)";
  button_7.style.backgroundColor = "rgb(60,179,113)";
  button_8.style.backgroundColor = "rgb(60,179,113)";
  button_9.style.backgroundColor = "rgb(60,179,113)";
  numbers = [];
  data_bt = "";
  Delete_line_btn()
}
Send_bt.addEventListener("click", Send);

function Reset() {
  numbers = [];
  data_bt = " ";
  Showvalue.value = "";
  Show_all_value.value = "";
  tmp = "";
}
Reset_btn.addEventListener("click", Reset);

/**
* Số thứ tự tăng dần
* - Đầu vào:
*  + số thứ 1: num01
*  + số thứ 2: num02
*  + số thứ 3: num03
*  + số chuyển đổi trung gian: numChange
* - Xử lý:
*  + chuyển số bé nhất vào num01:
*    ~ so sánh num01 và num02: nếu num01 > num02 => numChange = num01, num01 = num02, num02 = numChange
*    ~ so sánh num01 và num03: nếu num01 > num03 => numChange = num01, num01 = num03, num03 = numChange
*  + chuyển số bé nhì vào num02:
*    ~ so sánh num02 và num03: nếu num02 > num03 => numChange = num02, num02 = num03, num03 = numChange
*  - Đầu ra: in giá trị num01, num02, num03
**/
document.getElementById("btnTangDan").onclick = function() {
    var num01 = parseInt(document.getElementById("txtNumber1").value);
    var num02 = parseInt(document.getElementById("txtNumber2").value);
    var num03 = parseInt(document.getElementById("txtNumber3").value);
    var numChange;

    //chuyển số bé nhất vào num01
    if(num01 > num02) {
        numChange = num01;
        num01 = num02;
        num02 = numChange
    }
    if(num01 > num03) {
        numChange = num01;
        num01 = num03;
        num03 = numChange;
    }
    //chuyển số bé nhì vào num02:
    if(num02 > num03) {
        numChange = num03;
        num03 = num02;
        num02 = numChange;
    }
    var kq = "<p class='alert alert-success'>" + num01 + ", " + num02 + ", " + num03 + "</p>"
    document.getElementById("footerTangDan").innerHTML = kq;
}



/**
* Chào hỏi
* - Đầu vào:
*  + chọn 1 trong 4 giá trị sau: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
* - Xử lý:
*  + nếu giá trị là B: => chao += B
*  + nếu giá trị là M: => chao += B
*  + nếu giá trị là A: => chao += B
*  + nếu giá trị là E: => chao += B
* - Đầu ra: in kết quả
**/
document.getElementById("btnChao").onclick = function() {
    var whoAreYou = document.getElementById("who").value;
    var person;
    switch (whoAreYou) {
        case "B":
            person = "Bố"
            break;
        case "M":
            person = "Mẹ"
            break;
        case "A":
            person = "anh Trai"
            break;
        case "E":
            person = "Em gái"
            break;
        default:
            break;
    }
    var kq = "<p class='alert alert-success'>Chào " + person + "</p>";
    document.getElementById("footerChao").innerHTML = kq;
}



/**
* Tìm số chẵn, số lể
* - Đầu vào:
*  + số thứ 1: num1
*  + số thứ 2: num2
*  + số thứ 3: num3
*  + số chẵn: soChan
*  + số lẻ: soLe
* - Xử lý:
*  + viết hàm nhận 1 tham số, trả về true nếu tham số là số chẵn, và ngược lại
*  + nếu num1 = true: soChan += 1
*  + nếu num2 = true: soChan += 1
*  + nếu num3 = true: soChan += 1
*  + soLe = 3 - soChan
* - Đầu ra: in kết quả
**/
document.getElementById("btnChanLe").onclick = function() {
    var num1 = document.getElementById("txtNumber01").value;
    var num2 = document.getElementById("txtNumber02").value;
    var num3 = document.getElementById("txtNumber03").value;
    var soChan = 0;
    var soLe = 0;

    if(num1%2 == 0) {
        soChan += 1
    }
    if(num2%2 == 0) {
        soChan += 1
    }
    if(num3%2 == 0) {
        soChan += 1
    }
    soLe = 3 - soChan;
    var kq = "<p class='alert alert-success'>có " + soChan + " số chẵn và " + soLe + " số lẽ</p>";
    document.getElementById("footerChanLe").innerHTML = kq;
}



/**
* Nhận biết tam giác
* - Đầu vào:
*  + cạnh thứ 1: canh1
*  + cạnh thứ 2: canh2
*  + cạnh thứ 3: canh3
* - Xử lý:
*  + chuyển số lớn nhất vào canh1:
*    ~ so sánh canh1 và canh2: nếu canh1 < canh2 => canhChange = canh2, canh2 = canh1, canh1 = canhChange
*    ~ so sánh canh1 và canh3: nếu canh1 < canh3 => canhChange = canh3, canh3 = canh1, canh1 = canhChange
*  + chuyển số lớn nhì vào canh2:
*    ~ so sánh canh2 và canh3: nếu canh2 < canh3 => canhChange = canh3, canh3 = canh2, canh2 = canhChange
*  + nếu canh1 == canh2 || canh1 == canh3 || canh2 == canh3 => tam giác cân
*  + nếu canh1 == canh2 && canh1 == canh3 => tam giác đều
*  + nếu canh1*canh1 == canh2*canh2 + canh3*canh3 => tam giác vuông
* - Đầu ra: in kết quả
**/
document.getElementById("btnTamGiac").onclick = function() {
    var canh1 = parseInt(document.getElementById("canh1").value);
    var canh2 = parseInt(document.getElementById("canh2").value);
    var canh3 = parseInt(document.getElementById("canh3").value);
    var canhChange = 0;
    var loaiTamGiac = "";
    
    //chuyển số lớn nhất vào canh1
    if(canh1 < canh2) {
        canhChange = canh2;
        canh2 = canh1;
        canh1 = canhChange;
    }
    if(canh1 < canh3) {
        canhChange = canh3;
        canh3 = canh1;
        canh1 = canhChange;
    }
    //chuyển số lớn nhì vào canh2:
    if(canh2 < canh3) {
        canhChange = canh3;
        canh3 = canh2;
        canh2 = canhChange;
    }
    console.log(canh1)
    console.log(canh2)
    console.log(canh3)
    if(canh1 == canh2 && canh1 == canh3) {
        loaiTamGiac = "tam giác đều";
    } else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
        loaiTamGiac = "tam giác cân";
    } else if(canh1*canh1 == canh2*canh2 + canh3*canh3) {
        loaiTamGiac = "tam giác vuông";
    } else {
        loaiTamGiac = "tam giác thường";
    }
    var kq = "<p class='alert alert-success'> Đây là : " + loaiTamGiac + "</p>";
    document.getElementById("footerTamGiac").innerHTML = kq;
}
function myFunction1() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = document.getElementById("myImg1").src;
  document.getElementById("caption").innerHTML = document.getElementById("myImg1").alt;

  document.getElementsByClassName("close")[0].onclick = function() { 
  document.getElementById("myModal").style.display = "none";
  }
}


function myFunction2() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = document.getElementById("myImg2").src;
  document.getElementById("caption").innerHTML = document.getElementById("myImg2").alt;

  document.getElementsByClassName("close")[0].onclick = function() { 
  document.getElementById("myModal").style.display = "none";
  }
}
	
function myFunction3() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = document.getElementById("myImg3").src;
  document.getElementById("caption").innerHTML = document.getElementById("myImg3").alt;

  document.getElementsByClassName("close")[0].onclick = function() { 
  document.getElementById("myModal").style.display = "none";
  }
}

function myFunction4() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = document.getElementById("myImg4").src;
  document.getElementById("caption").innerHTML = document.getElementById("myImg4").alt;

  document.getElementsByClassName("close")[0].onclick = function() { 
  document.getElementById("myModal").style.display = "none";
  }
}

function myFunction5() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = document.getElementById("myImg5").src;
  document.getElementById("caption").innerHTML = document.getElementById("myImg5").alt;

  document.getElementsByClassName("close")[0].onclick = function() { 
  document.getElementById("myModal").style.display = "none";
  }
}


function myFunction6() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = document.getElementById("myImg6").src;
  document.getElementById("caption").innerHTML = document.getElementById("myImg6").alt;

  document.getElementsByClassName("close")[0].onclick = function() { 
  document.getElementById("myModal").style.display = "none";
  }
}
	
function myFunction7() {
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("img02").src = document.getElementById("myImg7").src;
  document.getElementById("caption2").innerHTML = document.getElementById("myImg7").alt;

  document.getElementsByClassName("close2")[0].onclick = function() { 
  document.getElementById("myModal2").style.display = "none";
  }
}

function myFunction8() {
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("img02").src = document.getElementById("myImg8").src;
  document.getElementById("caption2").innerHTML = document.getElementById("myImg8").alt;

  document.getElementsByClassName("close2")[0].onclick = function() { 
  document.getElementById("myModal2").style.display = "none";
  }
}

function myFunction9() {
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("img02").src = document.getElementById("myImg9").src;
  document.getElementById("caption2").innerHTML = document.getElementById("myImg9").alt;

  document.getElementsByClassName("close2")[0].onclick = function() { 
  document.getElementById("myModal2").style.display = "none";
  }
}


function myFunction10() {
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("img02").src = document.getElementById("myImg10").src;
  document.getElementById("caption2").innerHTML = document.getElementById("myImg10").alt;

  document.getElementsByClassName("close2")[0].onclick = function() { 
  document.getElementById("myModal2").style.display = "none";
  }
}
	
function myFunction11() {
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("img02").src = document.getElementById("myImg11").src;
  document.getElementById("caption2").innerHTML = document.getElementById("myImg11").alt;

  document.getElementsByClassName("close2")[0].onclick = function() { 
  document.getElementById("myModal2").style.display = "none";
  }
}

function myFunction12() {
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("img02").src = document.getElementById("myImg12").src;
  document.getElementById("caption2").innerHTML = document.getElementById("myImg12").alt;

  document.getElementsByClassName("close2")[0].onclick = function() { 
  document.getElementById("myModal2").style.display = "none";
  }
}

function v() {
  var inpObj1 = document.getElementById("gender");
  var inpObj2 = document.getElementById("name");
  var inpObj3 = document.getElementById("phone");
  var inpObj4 = document.getElementById("email");
  var inpObj5 = document.getElementById("address");
  var inpObj6 = document.getElementById("address2");
  if (!inpObj1.checkValidity()) {
    document.getElementById("error1").innerHTML = inpObj1.validationMessage;
    document.getElementById("confirm").disabled = true;
  } 
  else {
    document.getElementById("error1").innerHTML = "";
    document.getElementById("confirm").disabled = false;
  }

  if (!inpObj2.checkValidity()) {
    document.getElementById("error2").innerHTML = inpObj2.validationMessage;
    document.getElementById("confirm").disabled = true;
  }
  else {
    document.getElementById("error2").innerHTML = "";
    document.getElementById("confirm").disabled = false;
  }
 
  if (!inpObj3.checkValidity()) {
    document.getElementById("error3").innerHTML = inpObj3.validationMessage;
    document.getElementById("confirm").disabled = true;
  } 
  else {
    document.getElementById("error3").innerHTML = "";
    document.getElementById("confirm").disabled = false;
  }

  if (!inpObj4.checkValidity()) {
    document.getElementById("error4").innerHTML = inpObj4.validationMessage;
    document.getElementById("confirm").disabled = true;
  }
  else {
    document.getElementById("error4").innerHTML = "";
    document.getElementById("confirm").disabled = false;
  }

    if (!inpObj5.checkValidity()) {
    document.getElementById("error5").innerHTML = inpObj5.validationMessage;
    document.getElementById("confirm").disabled = true;
  }
  else {
    document.getElementById("error5").innerHTML = "";
    document.getElementById("confirm").disabled = false;
  }

  if (!inpObj6.checkValidity()) {
    document.getElementById("error6").innerHTML = inpObj6.validationMessage;
    document.getElementById("confirm").disabled = true;
  }
  else {
    document.getElementById("error6").innerHTML = "";
    document.getElementById("confirm").disabled = false;
  }
} 

function v2() {
  var inpObj8 = document.getElementById("password");

  if (!inpObj8.checkValidity()) {
    document.getElementById("error8").innerHTML = inpObj8.validationMessage;
    document.getElementById("confirm2").disabled = true;
  }
  else {
    document.getElementById("error8").innerHTML = "";
    document.getElementById("confirm2").disabled = false;
  }
} 

function pho() {
  
  localStorage.setItem("iconname", document.getElementById("myFile").files[0].name);

  document.getElementById("photo1").src=localStorage.getItem("iconname");
  document.getElementById("photo2").src=localStorage.getItem("iconname");

}

function bg1() {
  document.body.style.backgroundImage="";
  document.body.style.backgroundColor="#f2f2f2";
}

function bg2() {
  document.body.style.backgroundImage="";
  document.body.style.backgroundColor="#ffeee6";
}

function bg3() {
  document.body.style.backgroundImage="";
  document.body.style.backgroundColor="#e6e6ff";
}

function bg4() {
  document.body.style.backgroundImage="linear-gradient(to bottom right, #ffe6f3, #ff4d4d)";
  document.body.style.backgroundColor="white";
}

function bg5() {
  document.body.style.backgroundImage="linear-gradient(to bottom right, #f2f2f2, #9494b8)";
  document.body.style.backgroundColor="white";
}

function bg6() {
  document.body.style.backgroundImage="linear-gradient(180deg, #ffff80, #d9d9d9)";
  document.body.style.backgroundColor="white";
}

function bg7() {
  document.body.style.backgroundImage="";
  document.body.style.backgroundColor="white";
}

function showpsw() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

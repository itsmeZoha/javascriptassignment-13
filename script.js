// let userName = prompt("Please Enter your name to visit our website? ") 
// window.onload = function(){
//    let message ="Good Day"
// //    let firstName = prompt("Please Enter Your First Name?")
// //    let lastName = prompt("Please Enter Your Last Name?")
// //    let fullName = firstName +" "+ lastName
//    let banger ="!"
//    document.getElementById("userName").innerHTML = message + " " + userName+ banger
// }
var popupWindow;


console.log(window.location.href) // protcol + host name mily ga //
console.log(window.location.hostname)  // hostname = domain ko kahty ha //
console.log(window.location.pathname)  //forwad salch lga kar jo bi lekh rahy ha wo path my a jye ga //
console.log(window.location.hash)   // jo pathname ky bad hoga wo hash m a jye gi //
//---------------------Where We At---------------------//
function whereWeAt(){
   document.getElementById('output').innerHTML = window.location.href
}
//---------------------Go To Google---------------------//
function goToGoogle(){
   window.location.href = "https://www.google.com"   // href my back hum apni website pr ja sakty ha //

}
//---------------------Replace URL---------------------//
function replaceURL(){
      // window.location.replace("https://www.google.com") // replace sy hum apny website pr nahi ja sakty //
}   
//---------------------Open Popup---------------------//
function openPopup(){
   popupWindow = window.open("",'myWindow',"width=420,height=380,left=200,top=100")

}
//---------------------Fill Content in Popup---------------------//
function fillContentInPopup(){
   popupWindow.document.write("<h1>Hello World</h1>") //yah 1 alg document m khuly ga//to is ky laiy pahly openpopup karna pary ga phir document m content write hoga//
   // document.write("<h1>Hello World</h1>")
}
//---------------------Assign URL To Popup---------------------//
function assignURLToPopup(){
   popupWindow.location.assign("https://techna.pk")
   // popupWindow.location.assign("https://seeraht.com")
   setTimeout(()=>{ //yah javascript ha buildin function ha is k pahly parameter m hum function call karty ha or 2sry parameter m hum time btaty ha ky yah kitni dair chaly ga// 
      popupWindow.close()
   }, 5000)
}
//---------------------Close Popup---------------------//
function closePopup(){
}


//show output
function result(){
   document.getElementById('output')
}
//Clear output
function clearOutputButton(){
   document.getElementById('output').innerHTML = ""
}
let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
//    let firstName = prompt("Please Enter Your First Name?")
//    let lastName = prompt("Please Enter Your Last Name?")
//    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger
}
var popupWindow;


console.log(window.location.href) 
console.log(window.location.hostname)  
console.log(window.location.pathname)  
console.log(window.location.hash)   
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
      window.location.replace("https://www.google.com") 
}
//---------------------Open Popup---------------------//
function openPopup(){
   popupWindow = window.open("",'myWindow',"width=420,height=380,left=200,top=100")

}
//---------------------Fill Content in Popup---------------------//
function fillContentInPopup(){
   popupWindow.document.write("<h1>Hello World</h1>") 
   // document.write("<h1>Hello World</h1>")
}
//---------------------Assign URL To Popup---------------------//
function assignURLToPopup(){
   popupWindow.location.assign("https://techna.pk")
   
   setTimeout(()=>{ 
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
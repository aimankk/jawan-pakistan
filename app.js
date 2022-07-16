 function getNumber(num){
 var result = document.getElementById('result')
 result.value +=num
 console.log(result.value); }
 
 function getResult(){
    var result=document.getElementById('result')
    var p =result.value
     result.value=eval(p)
 }
 function clearResult(){
      var clear=document.getElementById('result')
       clear.value="" }

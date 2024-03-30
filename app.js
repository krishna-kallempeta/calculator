let a=document.getElementById('display');

function appendToResult(num){
  a.value += num;
}
function clearResult() {
  a.value = '';
}
function appendEqual(){
  try {
    a.value = eval(a.value);
} catch(error) {
    a.value = 'Error';
}
}



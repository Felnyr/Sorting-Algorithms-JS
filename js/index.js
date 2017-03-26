window.onload = function(){
  function bogo(arr) {
    var _shuffleCount = 0;
    function shuffle(arr) {
      var _shuffled = [];
      var _rand;
      while (arr.length !== 0) {
        _rand = Math.floor(Math.random() * arr.length)
        _shuffled.push(arr.splice(_rand, 1)[0]);
      }
      return _shuffled;
    }

    function sorted(shuffle) {
      for (var i = 0; i < shuffle.length - 1; i++) {
        if (shuffle[i] <= shuffle[i + 1]) {
          continue;
        } else {
          return false;
        }
      }
      return true
    }
    do {
      _shuffleCount++;
      arr = shuffle(arr);
    } while (!sorted(arr))
    return 'Number of shuffles: '+_shuffleCount +' | Sorted array: ' + arr.join(' ');  
  }
  
  function bubble(arr){
    var swapped;
    var counter = 0;
    do{
      counter++
      swapped=false;
      arr.forEach(function(e, i){
        if(arr[i]>arr[i+1]){
          var temp;
          temp = arr[i];
          arr[i]=arr[i+1];
          arr[i+1] = temp;
          swapped = true;
        }
      });
    }while(swapped)
      
    return 'Number of iterations: ' + counter + ' | sorted array: ' + arr.join(' ')  
  }
  
  function genArr(n, min, max){
    var array = [];
    for(var i=0;i<n;i++){
      array[i] = Math.round(Math.random()*(max - min) + min);
    }
    return array.join(' ');
  }
  
  document.getElementsByClassName("btn")[0].addEventListener("click", function(event){
    event.preventDefault();
    var n = document.getElementsByClassName('input')[0].value;
    var _output = document.getElementsByClassName('output')[0];
    var min = parseInt(document.getElementsByClassName('inputRange')[0].value);
    var max = parseInt(document.getElementsByClassName('inputRange')[1].value);
    //console.log("min: " + min + typeof(min) + " max: " + max)
    _output.innerHTML = genArr(n, min, max);
  });

  document.getElementsByClassName("btn")[1].addEventListener("click", function(event){
    event.preventDefault();
    var _input = document.getElementsByClassName('input')[1].value.split(' ').map(Number);
    var _output = document.getElementsByClassName('output')[1];
    var arr = _input;
    var abort = false;
    for(var i=0; i<arr.length; i++){
      if(isNaN(arr[i])){
        alert('Letters cannot be sorted. Input only numbers.')
        abort = true;
        break;
      }
    }
    if(!abort){
      _output.innerHTML = bogo(arr);
    }  
  });
  
  document.getElementsByClassName("btn")[3].addEventListener("click", function(event){
    event.preventDefault();
    var _input = document.getElementsByClassName('input')[2].value.split(' ').map(Number);
    var _output = document.getElementsByClassName('output')[2];
    var arr = _input;
    var abort = false;
    for(var i=0; i<arr.length; i++){
      if(isNaN(arr[i])){
        alert('Letters cannot be sorted. Input only numbers.')
        abort = true;
        break;
      }
    }
    if(!abort){
      _output.innerHTML = bubble(arr);
    }
  });
  
  
  document.getElementsByClassName("btnClear")[0].addEventListener("click", function(event){
    event.preventDefault();
    document.getElementsByClassName('input')[1].value = "";
    document.getElementsByClassName('output')[1];
  });
  document.getElementsByClassName("btnClear")[1].addEventListener("click", function(event){
    event.preventDefault();
    document.getElementsByClassName('input')[2].value = "";
    document.getElementsByClassName('output')[2];
  });
  console.log(document.getElementsByClassName('input').length)
};// onload
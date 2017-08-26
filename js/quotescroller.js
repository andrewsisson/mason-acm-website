function animate() {

  var array = ['Combobulating personality cores', 'Disentangling superstring matrix', 'Deserialising reality simulation', 'Crystallising expectation graphs', 'Analysing cerebral emission spectrum'];

  function shuffle(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {

      var randomIndex = Math.floor(Math.random() * (i + 1));
      var itemAtIndex = arr[randomIndex];

      arr[randomIndex] = arr[i];
      arr[i] = itemAtIndex;
    }
  }

  var index = 0;
  
  function loop() {

    if (index < 4) {
      index++;
    } else {
      index = 0;
    }

    arrayValue = array[index];
    document.getElementById("js-preloader").innerHTML = arrayValue;
    document.getElementById("js-preloader").className = '';
    document.getElementById("js-preloader").className = 'o-preloader__text o-preloader__text--js-cycle';
  }

  shuffle(array);
  loop();
  setInterval(loop, 6000);
}

animate();
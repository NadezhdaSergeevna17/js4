document.getElementById('check').onclick = function () {
  let distance = document.getElementById('out').value;
  distance = parseInt(distance)
  let time = document.getElementById('out2').value;
  time = parseInt(distance)

  if (distance && time) {
    res.innerHTML = 'Вам необходимо двигаться со средней скоростью ' + distance / time + ' км / ч'
  }
}

// задача 2

document.getElementById('check_1').onclick = function () {
  let sum = document.getElementById('out_3').value;
  sum = parseInt(sum)
  let price = document.getElementById('out_4').value;
  price = parseInt(price)

  let sell = Math.trunc(sum / price);
  change = sum - price * sell;

  if (sell < 1) {
    res_1.innerHTML = 'К сожалению Вам не хватит на шоколадку'
  }
  else {
    res_1.innerHTML = 'Всего шоколадок на эту сумму ' + sell + ' и ваша сдача ' + (sum - price * sell) + ' рублей '
  }
}

// задача 3

document.getElementById('check_2').onclick = function () {
  const rate = document.getElementById('out_5').value;
  let dollar = document.getElementById('out_6').value;
  dollar = parseInt(dollar)

  if (rate && dollar) {
    res_2.innerHTML = "По текущему курсу при обмене вы получите " + dollar * rate + " евро"
  }
}
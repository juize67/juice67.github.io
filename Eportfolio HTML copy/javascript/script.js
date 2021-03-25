document.getElementById('.cal1ev3').onclick = cal1opendesc3()

document.getElementById('.cal1ev2').onclick = cal1opendesc2()

document.getElementById('closecab').onclick = backtocal()

 function cal1opendesc3() {
   document.getElementById('calappearbox').style.display="block";
   $('#caltap').text('changedthetitle?');
   $('#calttb').text('definitely not lorem let me write this just a sec');

}

function cal2opendesc1() {
  document.getElementById('calappearbox').style.display="block";
  $('#caltap').text('changedthetitle2?');
  $('#calttb').text('now back to lorem lol hopefully this works');
}

function backtocal() {
  document.getElementById('calappearbox').style.display="none";
}

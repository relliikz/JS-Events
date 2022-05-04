var x = document.getElementById('demo');
x.addEventListener('onload', 'Ipsum Dominum');
x.addEventListener('click', 'Goodbye Mars');

var y = document.getElementById('toggle');
y.addEventListener('onload', buttonLoad);
y.addEventListener('click', buttonToggle);

var z = document.getElementById('enable');
z.addEventListener('click', EnableButton);
z.addEventListener('click');

function ChangeButton() {
  document.getElementById('toggle').disabled = true;
}

function buttonLoad() {
  document.getElementById('toggle').disabled = true;
}

function EnableButton() {
  if (document.getElementById('toggle').disabled == false) {
    document.getElementById('toggle').disabled = true;
    document.getElementById('enable').this.innerHTML = 'Enable Change bg';
  } else {
    document.getElementById('toggle').disabled = false;
    document.getElementById('enable').this.innerHTML = 'Disable Change bg';
  }
}

function buttonToggle() {
  if (document.body.style.backgroundColor == 'green') {
    document.body.style.backgroundColor = 'red';
  } else {
    document.body.style.backgroundColor = 'green';
  }
}

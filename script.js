const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        let btntext = btn[i].innerText;

        if (btntext === '×') {
            btntext = '*';
        }

        if (btntext === '÷') {
            btntext = '/';
        }

        screen.value += btntext;
    });
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function backspc() {
    screen.value = screen.value.slice(0, -1);
}

function classToggle() {
    this.classList.toggle('class1');
    this.classList.toggle('class2');

}

document.getElementById('container').addEventListener('click', classToggle);
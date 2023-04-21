const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const enteredName = nameInput.value;
    alert(`Thank you, ${enteredName}! Your request has been received.`);
    form.reset();
});

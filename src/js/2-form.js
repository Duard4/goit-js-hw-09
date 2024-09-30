const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';

const values = JSON.parse(localStorage.getItem(localStorageKey))
console.log(values)
email.value = values ? values.email : '';
message.value = values ? values.message : '';

const formData = { email: "", message: "" };

form.addEventListener('input', evt => {
    if (evt.target == message)
        formData.message = evt.target.value;
    else
        formData.email = evt.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
	evt.preventDefault();
	console.log(formData);
	localStorage.removeItem(localStorageKey);
	form.reset();
});

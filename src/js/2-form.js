const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';

const values = JSON.parse(localStorage.getItem(localStorageKey));

email.value = values ? values.email : '';
message.value = values ? values.message : '';

let formData = { email: email.value, message: message.value };

form.addEventListener('input', evt => {
	if (evt.target == message) formData.message = message.value.trim();
	else formData.email = email.value.trim();
	localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
	evt.preventDefault();
	if (!(message.value.trim() && email.value.trim()))
		alert('Fill please all fields');
	else {
		console.log(formData);
        formData.email = '';
        formData.message = '';
        localStorage.removeItem(localStorageKey);
		form.reset();
	}
});

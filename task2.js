// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById('userNameInput');
const getUserButton = document.getElementById('getUserButton');
const userCity = document.getElementById('userCity');

getUserButton.addEventListener('click', function() {
    const userName = userNameInput.value.trim(); 

    if (userName === '') {
        userCity.textContent = 'Please enter a name.';
        return;
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка завантаження даних');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());

            if (user) {
                userCity.textContent = `City: ${user.address.city}`;
            } else {
                userCity.textContent = 'User not found.';
            }
        })
        .catch(error => {
            userCity.textContent = 'Error fetching data.';
            console.error(error);
        });
});

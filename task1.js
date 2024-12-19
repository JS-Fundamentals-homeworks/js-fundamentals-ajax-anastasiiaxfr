// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 
// Визначаємо URL для запиту

const URL = 'https://jsonplaceholder.typicode.com/users';

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Помилка мережі');
    }
    return response.json();
  })
  .then(users => {
    const usersList = document.querySelector('.usersList');
    
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name; 
      usersList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Some error:', error);
  });

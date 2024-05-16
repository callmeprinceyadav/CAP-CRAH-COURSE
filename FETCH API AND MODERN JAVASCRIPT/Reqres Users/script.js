document.addEventListener('DOMContentLoaded', function () {
    const fetchUsersBtn = document.getElementById('fetchUsersBtn');
    const usersContainer = document.getElementById('usersContainer');

    fetchUsersBtn.addEventListener('click', function () {
        fetch('https://reqres.in/api/users') // Fetching user data from Reqres API
            .then(response => response.json())
            .then(data => {
                displayUsers(data.data); // Displaying user data
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    });

    function displayUsers(users) {
        usersContainer.innerHTML = ''; // Clearing previous data
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = `${user.first_name} ${user.last_name}'s avatar`;

            const name = document.createElement('p');
            name.textContent = `${user.first_name} ${user.last_name}`;

            const email = document.createElement('p');
            email.textContent = user.email;

            userCard.appendChild(avatar);
            userCard.appendChild(name);
            userCard.appendChild(email);

            usersContainer.appendChild(userCard);
        });
    }
});

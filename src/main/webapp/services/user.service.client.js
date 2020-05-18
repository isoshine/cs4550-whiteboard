function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    //this.url = 'http://localhost:8080/users';
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/kim.shine/modules';
    let self = this;

    function createUser(user) {
        console.log('creating user');
        const userString = JSON.stringify(user);
        console.log(userString);

        //fetch is a GET method type
        return fetch(self.url, {
            method: 'POST',
            body: userString,
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function(response) {
                return response.json()
            })
    }

    function deleteUser(userId) {
        console.log('removing user: ' + userId);

        return fetch(self.url + '/' + userId, {
            method: 'DELETE'
        })
            .then(function(response) {
                return response.json();
            })
    }

    function updateUser(userId, user) {
        console.log('updating user' + userId);
        const userString = JSON.stringify(user);
        console.log(userString);

        return fetch(self.url + '/' + userId, {
            method: 'PUT',
            body: userString,
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function(response) {
                return response.json()
            })
    }

    // same output:
    // const promise = fetch(self.url);
    // promise.then(function(response) { response.json() }) }
    function findAllUsers() {
        return fetch(self.url)
            .then(function(response) {
                return response.json()
            })
    }

    function findUserById(userId) {
        return fetch(self.url + '/' + userId)
            .then(function(response) {
                return response.json()
            })
    }
}
//lambda function, we dont want to compete with other functions' namespace
//the () at the end to execute what we are putting in the lambda function

(function() {
    let users = [];

    let $tbody, $addbtn, $updatebtn;
    let $usernameField, $passwordField, $firstField, $lastField, $roleField;
    let service = new AdminUserServiceClient();

    function deleteUser(event) {
        console.log(event);
        const target = event.currentTarget;
        const $button = $(target);
        const userId = $button.attr('id');
        alert('delete user ' + userId);
        service.deleteUser(userId);
        service.deleteUser(userId).then(function() {
            users = users.filter(function(user) {
                return user._id !== userId;
            })
            renderAllUsers()
        })
    }

    function renderUser(user) {
        selectedUser = user;
        $usernameField = user;
        $firstField.val(user.name);
        $lastField.val(user.last);
    }

    function updateUser() {
        const updateUser = {
            _id: selectUser._id,
            username: $usernameField.id,
            first: $firstField.val,
            last: $lastField.val()
        }
        service.updateUser(selectedUser._id, updatedUser).then(function(status) {
            users = users.map(function(user) {
                if (user._id === selectedUser._id) {
                    return updateUser;
                }
                else {
                    return user;
                }
            })
        })
    }

    function selectUser(event) {
        const target = event.currentTarget;
        const $button = $(target);
        const userId = $button.attr('id');
        service.findUserById(userId).then(function(user){
            console.log(user);
            renderUser(user);
        })
    }

    function renderAllUsers() {
        const template = $('.wbdv-user-row-template')[0];
        const $template = $(template);
        const clone = $template.clone;
        $tbody.empty();
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const copy = clone.clone();

            copy.find('.wbdv-username').html(user.username);
            copy.find('.wbdv-first-name').html(user.first);
            copy.find('.wbdv-last-name').html(user.last);
            copy.find('.wbdv-role').html(user.role);
            copy.find('.wbdv-delete')
                .attr('id', user._id)
                .click(deleteUser);
            copy.find('.wbdv-edit')
                .attr('id', user._id)
                .click(selectUser);
            $tbody.append(copy);

        }
    }

    function createUser() {
        const username = $usernameField.val();
        const first = $firstField.val();
        const last = $lastField.val();

        const newUser = {
            username: username,
            first: first,
            last: last,
        };

        service.createUser(newUser).then(function(actualUser) {
            users.push(actualUser);
            renderAllUsers();
        })

    }

    function findAllUsers() {
        service.findAllUsers().then(function(allUsers) {
            users = allUsers;
            renderAllUsers();
        })
    }

    function main() {
        $tbody = $('tbody');
        $addbtn = $('.wbdv-add-btn');

        //no createUser() because we don't want to call createUser() right away
        //we are just passing createUser to be called at a later time
        $addbtn.click(createUser);
        $updatebtn.click(updateUser);

        $usernameField = $('.wbdv-username-field');
        $passwordField = $('.wbdv-password-field');
        $firstField = $('.wbdv-first-name-field');
        $lastField = $('.wbdv-last-name-field');
        $roleField = $('.wbdv-role-field');

        findAllUsers();

        for(let i=0; i<users.length; i++) {
            const username = users[i].username;
            const newUserRow = $('<tr><td>'+username+'</td></tr>');
            $tbody.append(newUserRow);
        }

        //renderAllUsers();
    }

    jQuery(main);
})();


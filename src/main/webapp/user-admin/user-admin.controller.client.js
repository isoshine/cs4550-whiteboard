//lambda function, we dont want to compete with other functions' namespace
//the () at the end to execute what we are putting in the lambda function

(function() {

    let users = [{
        username: "username",
        password: "********",
        first: "First",
        last: "Last",
        role: "ROLE"
    }];


    let $tbody, $addbtn, $updatebtn, $deletebtn;
    let $usernameField, $passwordField, $firstField, $lastField, $roleField;
    let selectedUser;
    let service = new AdminUserServiceClient();


    function renderUser(user) {
        selectedUser = user;
        $usernameField = user;
        $firstField.val(user.name);
        $lastField.val(user.last);
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
        const clone = $template.clone();
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
        //const password = $passwordField.val();
        const first = $firstField.val();
        const last = $lastField.val();
        const role = $roleField.val();

        const newUser = {
            username: username,
            first: first,
            last: last,
            role: role
        };

        service.createUser(newUser).then(function (actualUser) {
            users.push(actualUser);
            renderAllUsers();
        })
    }

    function deleteUser(event) {
        console.log(event);
        const target = event.currentTarget;
        const $button = $(target);
        const userId = $button.attr('id');

        //alert('delete user ' + userId);

        service.deleteUser(userId).then(function() {
            users = users.filter(function(user) {
                return user._id !== userId;

            });
            renderAllUsers();
        })
    }


    function updateUser(event) {
        const updatedUser = {
            _id: selectedUser._id,
            username: $usernameField.id,
            first: $firstField.val,
            last: $lastField.val(),
            role: $roleField.val()
        };

        service.updateUser(selectedUser._id, updatedUser).then(function(status) {
            users = users.map(function(user) {
                if (user._id === selectedUser._id) {
                    users.push(updatedUser);
                    renderAllUsers();
                }
                else {
                    users.push(user);
                    renderAllUsers();
                }
            })
        })
    }


    function findAllUsers() {
        service.findAllUsers().then(function(allUsers) {
            users = allUsers;
            renderAllUsers();
        })
    }

    function main() {
        //wrapping elements in the jQuery wrapper
        $tbody = $('tbody');
        $addbtn = $('.wbdv-add-btn');
        $deletebtn = $('.wbdv-delete-btn');
        $updatebtn = $('.wbdv-update-btn');


        //when we add () after a function call, it means we want to execute the function
        //right away
        $addbtn.click(createUser);
        $updatebtn.click(updateUser);
        $deletebtn.click(deleteUser);

        $usernameField = $('.wbdv-username-field');
        $passwordField = $('.wbdv-password-field');
        $firstField = $('.wbdv-first-name-field');
        $lastField = $('.wbdv-last-name-field');
        $roleField = $('.wbdv-role-field');

        //findAllUsers();

        for(let i=0; i<users.length; i++) {
            const username = users[i].username;
            const newUserRow = $('<tr><td>'+username+'</td></tr>');
            $tbody.append(newUserRow);
        }

        findAllUsers();
    }

    jQuery(main);
})();


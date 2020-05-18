//lambda function, we dont want to compete with other functions' namespace
//the () at the end to execute what we are putting in the lambda function

(function() {

    let users = [];
    var $tbody, $createBtn, $updateBtn, $removeBtn, $editBtn;
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    let selectedUser;

    let userService = new AdminUserServiceClient();
    $(main);

    function renderUser(user) {
        selectedUser = user;
        $usernameFld = user;
        $firstNameFld.val(user.name);
        $lastNameFld.val(user.last);
    }

    function selectUser(event) {
        const target = event.currentTarget;
        const $button = $(target);
        const userId = $button.attr('id');
        userService.findUserById(userId).then(function(user){
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
        const username = $usernameFld.val();
        //const password = $passwordFld.val();
        const first = $firstNameFld.val();
        const last = $lastNameFld.val();
        const role = $roleFld.val();

        const newUser = {
            username: username,
            first: first,
            last: last,
            role: role
        };

        userService.createUser(newUser).then(function (actualUser) {
            users.push(actualUser);
            renderAllUsers();
        })
    }

    function deleteUser(event) {
        console.log(event);
        const target = event.currentTarget;
        const $button = $(target);
        const userId = $button.attr('id');

        userService.deleteUser(userId).then(function() {
            users = users.filter(function(user) {
                return user._id !== userId;

            });
            renderAllUsers();
        })
    }


    function updateUser() {
        const updatedUser = {
            _id: selectedUser._id,
            username: $usernameFld.id,
            first: $firstNameFld.val,
            last: $lastNameFld.val(),
            role: $roleFld.val()
        };

        userService.updateUser(selectedUser._id, updatedUser).then(function(status) {
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
        userService.findAllUsers().then(function(allUsers) {
            users = allUsers;
            renderAllUsers();
        })
    }

    //main function put at the bottom
    function main() {
        //wrapping elements in the jQuery wrapper
        $tbody = $('tbody');
        $createBtn = $('.wbdv-add-btn');
        $removeBtn = $('.wbdv-delete-btn');
        $updateBtn = $('.wbdv-update-btn');
        $editBtn = $('.wbdv-edit-btn');

        $usernameFld = $('.wbdv-username-field');
        $passwordFld = $('.wbdv-password-field');
        $firstNameFld = $('.wbdv-first-name-field');
        $lastNameFld = $('.wbdv-last-name-field');
        $roleFld = $('.wbdv-role-field');

        //when we add () after a function call, it means we want to execute the function
        //right away
        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $updateBtn.click(updateUser);

        /*for(let i=0; i<users.length; i++) {
            const username = users[i].username;
            const newUserRow = $('<tr><td>'+username+'</td></tr>');
            $tbody.append(newUserRow);
        }*/

        findAllUsers();
    }

    jQuery(main);
})();


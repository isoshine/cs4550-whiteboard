//lambda function, we dont want to compete with other functions' namespace
//the () at the end to execute what we are putting in the lambda function

(function() {

    let users = [];
    var $tbody, $createBtn, $updateBtn, $removeBtn, $editBtn;
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    let selectedUser = {};

    let userService = new AdminUserServiceClient();
    $(main);

    //updating the form fields (after selecting to edit row)
    function renderUser(user) {
        selectedUser = user;

        $usernameFld.val(user.username);
        $firstNameFld.val(user.first);
        $lastNameFld.val(user.last);
        $roleFld.val(user.role);
    }

    function editUser(event) {
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

            //copy.find('.wbdv-create')
            //    .click(createUser);

            copy.find('.wbdv-remove')
                .attr('id', user._id)
                .click(deleteUser);

            copy.find('.wbdv-edit')
                .attr('id', user._id)
                .click(editUser);

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
            //filter operation removes the one user
            users = users.filter(function(user) {
                //true: we want to keep it
                //false: we don't want to keep it
                return user._id !== userId;

            });
            renderAllUsers();
        })
    }


    function updateUser() {
        const updatedUser = {
            _id: selectedUser._id,
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            first: $firstNameFld.val(),
            last: $lastNameFld.val(),
            role: $roleFld.val()
        };

        userService.updateUser(selectedUser._id, updatedUser).then(function(status) {
            //map iterates over array and passes each element of array
            users = users.map(function(user) {
                if (user._id === selectedUser._id) {
                    return updatedUser;
                }
                else {
                    return user;
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
        $createBtn = $('.wbdv-create');
        $removeBtn = $('.wbdv-remove');
        $updateBtn = $('.wbdv-update');
        $editBtn = $('.wbdv-edit');

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

        findAllUsers();

        /*for(let i=0; i<users.length; i++) {
            const username = users[i].username;
            const newUserRow = $('<tr><td>'+username+'</td></tr>');
            $tbody.append(newUserRow);
        }*/

    }
    jQuery(main);
})();


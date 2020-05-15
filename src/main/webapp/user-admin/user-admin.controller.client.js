//lambda function, we dont want to compete with other functions' namespace
//the () at the end to execute what we are putting in the lambda function

(function() {
    const users = [
        {username: 'isoshine', password: 'clubpenguin', first: 'Shine',
            last: 'Kim', role: 'STUDENT'},
        {username: 'raykim2093', password: 'you27983017', first: 'Ray',
            last: 'Kim', role: 'FACULTY'}
    ];

    let $tbody, $addbtn;
    let $usernameField, $passwordField, $firstField, $lastField, $roleField;

    function renderAllUsers() {
        console.log('rendering all users');
        console.log(users);
        const template = $('.wbdv-user-row-template')[0];
        const $template = $(template);

        const clone = $template.clone();

        $tbody.empty();

        for(let i=0; i<users.length; i++) {
            const user = users[i];
            const copy = clone.clone();
            copy.find('.wbdv-username').html(user.username);
            copy.find('.wbdv-first-name').html(user.first);
            copy.find('.wbdv-last-name').html(user.last);
            copy.find('.wbdv-role').html(user.role);
            $tbody.append(copy);
        }
    }

    function createUser() {
        const username = $usernameField.val();
        const first = $firstField.val();
        const last = $lastField.val();
        const role = $roleField.val();

        const newUser = {
            username: username,
            first: first,
            last: last,
            role: role
        };

        users.push(newUser);
        renderAllUsers();
    }

    function main() {
        $tbody = $('tbody');
        $addbtn = $('.wbdv-add-btn');

        //no createUser() because we don't want to call createUser() right away
        //we are just passing createUser to be called at a later time 
        $addbtn.click(createUser);

        $usernameField = $('.wbdv-username-field');
        $passwordField = $('.wbdv-password-field');
        $firstField = $('.wbdv-first-name-field');
        $lastField = $('.wbdv-last-name-field');
        $roleField = $('.wbdv-role-field');


        for(let i=0; i<users.length; i++) {
            const username = users[i].username;
            const newUserRow = $('<tr><td>'+username+'</td></tr>');
            $tbody.append(newUserRow);
        }
        renderAllUsers();
    }

    jQuery(main)
})();


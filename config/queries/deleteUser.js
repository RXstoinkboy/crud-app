const db = require('../db');

const deleteUserQuery = `
    DELETE FROM users
        WHERE id = $1
`;

const getUserInfoQuery = `
    SELECT (id) FROM users
        WHERE username = $1
`;

const deleteTasksQuery = `
    DELETE FROM tasks
        WHERE user_id = $1
`;

const deleteListsQuery = `
    DELETE FROM lists
        WHERE user_id = $1
`;
// 0. get user id
// 1. delete user
// 2. delete lists for this user
// 3. delete tasks for this user
// 4. clear cookies with token

const deleteUser = (req, res) => {
    db.query(getUserInfoQuery, [req.body.username], (getUserError, userData) => {

        if(getUserError){
            return res.json(getUserError);

        } else {
            // 0. get user_id for currently logged in user
            const userId = userData.rows[0].id;

            // 1. delete user
            db.query(deleteUserQuery, [userId], (deleteUserError, deleteUserRes) => {

                if(deleteUserError){
                    return res.json(deleteUserError);

                } else {
                    // 2. delete lists
                    db.query(deleteListsQuery, [userId], (deleteListsError, deleteListsRes) => {
                        console.log(`lists deleted`)
                    });

                    // 3. delete tasks
                    db.query(deleteTasksQuery, [userId], (deleteTasksError, deleteTasksRes) => {
                        console.log(`tasks deleted`)
                    })

                    // 4. delete cookies
                    if(req.cookies.login_token){
                        console.log(`user deleted`);
                        res.clearCookie('login_token').send(`user deleted`);
                    }    
                }
            })
        }

    })
}

module.exports = deleteUser;
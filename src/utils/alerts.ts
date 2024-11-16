export const ALERT = {
    DATABASE: {
        INIT: 'Connected on database MySQL...',
    },
    CONTROLLER: {
        USER_GET_ERROR: 'Error fetching users',
        USER_NOT_FOUND: 'User not found',
        USER_CREATED_SUCCESS: 'User created with success!',
        USER_CREATED_FAILED: 'Error fetching users',
        USER_DELETED_SUCCESS: 'Operation was concluded with success...',
        USER_DELETED_FAILED: "Wasn't possible to execute the operation...",
        USER_INFO_REQUIRED: 'Missing required fields',
        USER_UPDATE_SUCCESS: 'User updated successfully',
        USER_UPDATE_FAILED: 'Error updating user',
    },
    REPOSITORY: {
        QUERY_INSERT_ONE:
            'INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?);',
        QUERY_SELECT_ALL: 'SELECT * FROM users;',
        QUERY_DELETE_BY_ID: 'DELETE FROM users WHERE id = (?);',
    },
};

/**
 * Created by vasiliy on 25.09.16.
 */

'use strict';

module.exports = {
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String
}
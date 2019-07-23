const crypto = require('crypto');

// generate random salt
// length of 16 should be usually enough
const createSalt = (length = 16) => {
    return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0, length);
};

// apply hashing algorithm to password
// export it in order to validate password when logging in
const createHashedPassword = (password, salt) => {
    const hash = crypto.createHmac('sha512', salt); // hashing algorithm
    hash.update(password);
    const hash_password = hash.digest('hex');

    return {
        salt,
        hash_password
    };
};

const hashPassword = (password) => {
    const salt = createSalt(16); // create salt of 16 which is also default and usually should be enough
    const passwordData = createHashedPassword(password, salt); // return hashed password and random salt

    return {
        salt: passwordData.salt,
        hash_password: passwordData.hash_password
    }
};

module.exports = {
    hashPassword,
    createHashedPassword
}
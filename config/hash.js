const crypto = require('crypto');

// generate random salt
// length of 16 should be usually enough
const createSalt = (length = 16) => {
    return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0, length);
};

// apply hashing algorithm to password
const getHashedPassword = (password = 'password', salt = createSalt()) => {
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
    const passwordData = getHashedPassword(password, salt); // return hashed password and random salt
    return {
        hash_password: passwordData.hash_password,
        salt: passwordData.salt
    }
};

console.log(hashPassword('hellopassword'));

module.exports = {
    hashPassword
}
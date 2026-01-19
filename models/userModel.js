const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // No two users can have the same email
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false // By default, a new user is NOT an admin
    }
}, {
    timestamps: true
});

// Automatic Password Encryption
// This runs BEFORE (.pre) saving the user to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    // Salt is random data added to password to make it stronger
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    this.password = await bcrypt.hash(this.password, salt);
});

// Method to check if entered password matches the encrypted password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
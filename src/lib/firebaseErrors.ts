const SIGNUP_EROR =
    'FirebaseError: Firebase: Error (auth/email-already-in-use).' === 'FirebaseError: Firebase: Error (auth/email-already-in-use).'
        ? 'Email already in use'
        : 'Something went wrong';
const LOGIN_EROR = 'auth/user-not-found' === 'auth/user-not-found' ? 'User not found' : 'Something went wrong';
const PASSWORD_EROR = 'auth/wrong-password' === 'auth/wrong-password' ? 'Wrong password' : 'Something went wrong';
const EMAIL_EROR = 'auth/invalid-email' === 'auth/invalid-email' ? 'Invalid email' : 'Something went wrong';
const NO_USER = 'auth/user-not-found' === 'auth/user-not-found' ? 'User not found' : 'Something went wrong';

export { SIGNUP_EROR, LOGIN_EROR, PASSWORD_EROR, EMAIL_EROR, NO_USER };

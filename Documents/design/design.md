# Design

## Architecture Overview:

Securify is comprised of components that handle user's input. validate user's password, encrypt passwords, and store credentials in a database.

### Components' Responsiblity

1. User's input Handler: while the software receives user's inputs, it will validate the credentials.
2. Password Validator: the software will check if the password meets all requirements.
3. Password Encryption: the software will use hashing algorithm to encrypt the password; then store it in a database with a password encryption file.
4. Database: the software use MongoDB and Mongoose to store user credentials.

# Requirements:

File Encryption:

As a user, I expect my credentials used to access the system to be encrypted securely:

1. As a user, I expect to see a file "password.txt" containing my username, and password.
2. As a user, I expect to see an encrypted file "password.enc.txt" to make hash format
3. As a user, I expect to store my credentials in mongoDB using mongoose.
   System Authorization:

As a user, I expect the system to authorize my credentials correctly so that I can successfully log in the system:
As a user, I expect the system to authorize my credentials/ return TRUE if:

1. My username and password match
2. My password is 6 characters long
   As a user I expect the system to return FALSE if :
3. My username input is not stored in the password file
4. My password input is empty

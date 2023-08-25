import User from "../User.js"
import 'dotenv/config.js'
import '../../config/db.js'

let users = [{
    email: "gabriela@mindy.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    location: "Argentina",
    role: 2,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    online: false,
    photo: "https://i.etsystatic.com/iap/80fd1e/3015025125/iap_300x300.3015025125_iwyzjf90.jpg?version=0"
}]

User.insertMany(users)

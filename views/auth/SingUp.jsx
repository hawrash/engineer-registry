const React = require('react')
/*
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
*/

function SignUp (props) {
    return(
        <div>
            <h1>Sign Up For The Greatest Of All Time</h1>
            <form action="/users" method="POST">
                <label htmlFor="name">Name:</label> <input type="text" id="name" name="name" title="Enter your name" placeholder="Enter your name" /><br/>
                <label htmlFor="email">Email:</label> <input type="email" id="email" name="email" title="Enter your email" placeholder="Enter your email" /><br/>
                <label htmlFor="password">Password:</label> <input type="password" id="password" name="password" title="Enter your password" placeholder="Enter your password" /><br/>
                <input type="submit" value="Submit to Register" />
            </form>
        </div>
    )
}

module.exports = SignUp

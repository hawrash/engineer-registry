const React = require('react')
/*
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
*/

function SignIn (props) {
    return(
        <div>
            <h1>Log In For The Greatest Of All Time</h1>
            <form action="/users/login" method="POST">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    title="Enter your email address"
                    placeholder="Email"
                /><br/>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    title="Enter your password"
                    placeholder="Password"
                /><br/>
                <input type="submit" value="Submit to Register" />
            </form>
        </div>
    )
}

module.exports = SignIn

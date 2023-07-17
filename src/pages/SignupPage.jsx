export default function SignupPage () {
    return (
        <div className="container--SignupLogin">
            <form className="form--editForm">
                <label className="label--editForm">Username
                    <input className="input--editForm" type="text" />
                </label>
                <label className="label--editForm">Email
                    <input className="input--editForm" type="text" />
                </label>
                <label className="label--editForm">Password
                    <input className="input--editForm" type="text" />
                </label>
                <button className=".btn--primary" type="submit">Sign up</button>
                <span className="text--sm">Already have account? </span>
                <span className="hyperlink--sm">Login</span>
            </form>
        </div>
    )
}
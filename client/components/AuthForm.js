import React from 'react';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
	}

	onSubmit(event) {
		event.preventDefault();
		const { email, password } = this.state
		this.props.onSubmit(email, password);
	}

	render() {
		return (
			<div className="row">
				<form onSubmit={this.onSubmit.bind(this)} className="col s4 offset-s4 center">
					<div className="input-field">
						<input
							placeholder="Email"
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
						/>
					</div>
					<div className="input-field">
						<input
							placeholder="Password"
							type="password"
							value={this.state.password}
							onChange={e => this.setState({ password: e.target.value })}
						/>
					</div>

					<button className="btn">Submit</button>

					<div className="errors">
						{ this.props.errors.map(error =>
							<div key={error} style={{ color: "red", marginTop: 10 }}>{error}</div>) }
					</div>
				</form>
			</div>
		)
	}
};

export default AuthForm;

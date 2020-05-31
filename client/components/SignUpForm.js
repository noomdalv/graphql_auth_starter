import React from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/SignUp';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errors: []
		}
	}

	onSubmit(email, password) {
		this.props.mutate({
			variables: { email, password },
			refetchQueries: [{ query }]
		}).catch(res => {
			const errors = res.graphQLErrors.map(error => error.message);
			this.setState({ errors })
		})
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<h3>Sign Up</h3>
				<AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
			</div>
		)
	}
};

export default graphql(mutation)(SignUpForm);

import React from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: []
		}
	}

	componentDidUpdate(prevProps) {		
		if (!prevProps.data.user && this.props.data.user) {
			hashHistory.push("/dashboard");
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
		return (
			<div>
				<h3>Login</h3>
				<AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
			</div>
		)
	}
};

export default graphql(query) (
	graphql(mutation)(LoginForm)
);

const graphql from 'graphql';
const {
	GraphQLObjectType,
	GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
	name: 'UserType',
	fields: {
		email : { new GraphQLString }
	}
});

module.exports = UserType;

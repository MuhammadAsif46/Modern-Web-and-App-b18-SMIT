import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

const PORT = process.env.PORT || 5000

const posts = [
    { id: 1, title: "Post 1", content: "Content of Post 1" },
    { id: 2, title: "Post 2", content: "Content of Post 2" },
    { id: 3, title: "Post 3", content: "Content of Post 3" },
]

const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", website: "https://johndoe.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "098-765-4321", website: "https://janesmith.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "555-555-5555", website: "https://alicejohnson.com" }
]

const server = new ApolloServer({
    typeDefs: `
        type Post {
            id: ID!
            title: String!
            content: String!
        }
        
        type User {
            id: ID!
            name: String!
            email: String!
            phone: String!
            website: String!
        }

        type Query {
            getPosts: [Post]
            getUsers: [User]
            getUserById(id: ID!): User
        }
    `,
    resolvers: {
        Query: {
            getPosts: () => posts,
            getUsers: () => users,
            getUserById: (_, { id }) => users.find(user => user.id === id)
        }
    },
})


await startStandaloneServer(server, {
    listen: { port: PORT },
})

console.log(`Server is running on http://localhost:${PORT}`)


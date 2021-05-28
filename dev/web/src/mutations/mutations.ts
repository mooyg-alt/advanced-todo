import { gql } from "@apollo/client";
export const CREATE_USER = gql`
mutation createUser($email:String!, $password: String!, $username: String!){
    createUser(data:{email: $email, password:$password, username: $username}){
          user{
      username,
      email,
      id
    }
    }
}
`;

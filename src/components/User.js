import React, { useContext, } from "react";
import { Card, } from "semantic-ui-react";
import { UserContext, } from "../providers/UserProvider"

const User = () => {
  const { email, firstName, lastName, gender, rank } = useContext(UserContext);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{ email }</Card.Header>
        <Card.Meta>First Name: {firstName}</Card.Meta>
        <Card.Meta>Last Name: {lastName}</Card.Meta>
        <Card.Meta>Gender: {gender}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Rank: {rank} </p>
      </Card.Content>
    </Card>
  )
}


export default User;
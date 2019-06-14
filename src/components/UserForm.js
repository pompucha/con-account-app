import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/UserProviders";

class UserForm extends React.Component {
  state = {
    email: this.props.email,
    rank: this.props.rank,
  };

  render () { 
    const { email, rank, } = this.state;

  };
};



export default ConnectedAccountForm;
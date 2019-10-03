import React from 'react';
import './layout.css';
import { UsersBar } from '../users_bar/users_bar';
import MockUsers from '../mock/users.json';
import { UserType } from '../user/user';

type Props = {};
type State = {
  users: Array<UserType>;
};

export class Layout extends React.Component<Props, State> {
  state = {
    users: []
  };

  componentDidMount(): void {
    this.setState({ users: MockUsers.users });
  }

  render() {
    return (
      <div className="layout">
        <UsersBar users={this.state.users} />
        <div>temporary div for chat window</div>
      </div>
    );
  }
}

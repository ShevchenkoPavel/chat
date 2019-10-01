import React from 'react';
import './layout.css';
import { UsersBar } from '../users_bar/users_bar';
// import { get } from '../queries/fetcher';
import MockUsers from '../mock/users.json';
import User from '../user/user';

type Props = {};
type State = {
  users: Array<User>;
};

export class Layout extends React.Component<Props, State> {
  state = {
    users: []
  };

  componentDidMount(): void {
    // get('localhost/public/mockapi/users.js');
    this.setState({ users: MockUsers.users });
  }

  render() {
    return (
      <div className="App">
        <UsersBar users={this.state.users} />
      </div>
    );
  }
}

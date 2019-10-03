import React from 'react';
import './chat.scss';
import { UsersBar } from '../../components/users_bar/users_bar';
import MockUsers from '../../utils/mock/users.json';
import { UserType } from '../../components/user/user';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {};
type State = {
  users: Array<UserType>;
};

export class Chat extends React.Component<Props, State> {
  state = {
    users: []
  };

  componentDidMount(): void {
    this.setState({ users: MockUsers.users });
  }

  render() {
    return (
      <Container
        className="chat__container"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <Row noGutters className="chat__container__content">
          <Col xs={4}>
            <UsersBar users={this.state.users} />
          </Col>
          <Col>temporary div for chat window</Col>
        </Row>
      </Container>
    );
  }
}

import React from "react";

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 12,
        firstName: "John",
        lastName: "Doe",
      },
    };
  }
  render() {
    return (
      <div>
        <Account user={this.state.user} />
      </div>
    );
  }
}

const Account = (props) => {
  const { user } = props; // same as -> const user = props.user;
  return (
    <div>
      <span>
        Name - {user.firstName} {user.lastName}
      </span>
      <span>ID - {user.id}</span>
    </div>
  );
};

export default Member;

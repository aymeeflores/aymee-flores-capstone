import Userfront from "@userfront/react";

Userfront.init("wbmx9mn4");

const SignupForm = Userfront.build({
  toolId: "knkalm",
});

class Login extends React.Component {
  render() {
    return <SignupForm />;
  }
}

export default Login;

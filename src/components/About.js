import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}
export default About;

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "DummyName",
        location: "DummyLocation",
      },
    };
  }

  async componentDidMount() {

     const data = await fetch("https://api.github.com/users/rajivr021");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name,location,avatar_url } = this.state.userInfo;
    console.log(name);
    
   
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rajivr021</h4>
      </div>
    );
  }
}

export default UserClass;

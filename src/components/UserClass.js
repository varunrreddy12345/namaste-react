import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name : "Dummy",
        location: "Default",
        avatar_url: "htp://dummy-photo.com",
      },
    };
    //console.log("child Constructor");
  }
 async componentDidMount () {

    //console.log("child Component Did Mount");
    const data = await fetch ("https://api.github.com/users/varunrreddy12345");
    const json = await data.json();
    this.setState({
      userInfo: json
    });
    console.log(json);
}

  render() {
    const { name ,location ,avatar_url } = this.state.userInfo;
   // debugger;
   console.log(this.props.name + "child Render");

    return (
      <div className="user-cards">
       
        <img src= {avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@varun1234</h4>
      </div>
    );
  }
}

export default UserClass;

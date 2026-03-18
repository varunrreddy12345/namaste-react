// import User from "./user";
// import UserClass from "./UserClass";
// import { Component } from "react";

// class About extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     console.log("Parent component Did Mount");
//   }
//   render() {
//     console.log("Parent Render");
//     return (
//       <div>
//         <h1> About class Component</h1>
//         <h2>This is the About Us page</h2>
//         <UserClass name={"varun (class)"} location={"Bnaglore class"} />
//       </div>
//     );
//   }
// }
// export default About;




 
import User from "./user";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
   // console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent component Did Mount");
  }

  render() {
   // console.log("Parent Render");
    return (
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">

        <h1 className="text-3xl font-bold text-blue-600 mb-3">
          About Class Component
        </h1>

<div>
  LoggedIn User
  <UserContext.Consumer>
  {({ loggedInUser }) => (
    <h1 className="text-xl font-bold">
      Logged In User: {loggedInUser}
    </h1>
  )}
</UserContext.Consumer>
</div>
        <h2 className="text-lg text-gray-700 mb-4">
          This is the About Us page
        </h2>

        <div className="p-4 bg-white rounded-md shadow">
          <UserClass name={"Varun (class)"} location={"Bangalore class"} />
        </div>

      </div>
    );
  }
}

export default About;
import React from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

export default function Excersice1() {
  const [userData, setUserData] = React.useState<any>({});

  /*
    (Need to write code for fetching data using above URL)
    ---write code below
  */

  return (
    <div className="body">
      <h1>Excersice1</h1>
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>
        {/*(Need to populate name here) e.g. - userData.name*/}
      </p>
      <p>
        <strong>Website: </strong>
        {/*(Need to populate website here)*/}
      </p>
      <p>
        <strong>Email: </strong>
        {/*(Need to populate email here)*/}
      </p>
      <p>
        <strong>Phone: </strong>
        {/*(Need to populate phone here)*/}
      </p>
    </div>
  );
}

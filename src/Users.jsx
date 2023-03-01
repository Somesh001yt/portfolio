// import { useEffect, useState } from "react";

// const Users = () => {
//   const [user, setUser] = useState([]);

//   const fetchData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         response.json().then((data) => {
//           setUser(data);
//           console.log(data);
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(user);
//   return (
//     <div>
//       <h1>List of users</h1>
//       <ul>
//         {user &&
//           user.length &&
//           user
//             .map((userobj) => <li key={userobj.id}>{userobj.name}</li>)
//             .slice(5, 10)}
//       </ul>
//     </div>
//   );
// };

// export default Users;

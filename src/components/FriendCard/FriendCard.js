import React from "react";
import "./FriendCard.css";

// const FriendCard = props => (
//   <div className="card">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//     <div className="content">
//       <ul>
//         <li>
//           <strong>Name:</strong> {props.name}
//         </li>
//       </ul>
//     </div>
//     <span onClick={() => props.removeFriend(props.id)} className="remove">
//       𝘅
//     </span>
//   </div>
// );

// export default FriendCard;



const FriendCard = props => (
  <div className={`card ${props.goodBad}`}>
    <div className="img-container" onClick={() => props.handleTouchFriend(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
    <div className="card-img-overlay">
      
    </div>
  </div>
);

export default FriendCard;
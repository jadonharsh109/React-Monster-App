// import { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card";

const CardList = ({ monstr }) => (
  
  <div className="card-list">
    {monstr.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
  );

// <<<<---------Class Component----------->>>>

// class CardList extends Component {
//   render() {
//     const { monstr } = this.props;

//     return (
//       <div className="card-list">
//         {monstr.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;

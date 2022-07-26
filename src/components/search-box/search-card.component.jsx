import "./search-card.style.css";

const SearchList = ({onChangeHandler, ClassName, PlaceHolder }) => (
    <div>
      <input
        className={`search-box ${ClassName}`}
        type="search"
        placeholder={PlaceHolder}
        onChange={onChangeHandler}
      />
    </div>
  );

// <<<<---------Class Component----------->>>>


// class SearchList extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           className={`search-box ${this.props.ClassName}`}
//           type="search"
//           placeholder={this.props.PlaceHolder}
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
//   }
// }

export default SearchList;

import { useState, useEffect, Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchList from "./components/search-box/search-card.component";
import "./App.css";


// <<<<---------Function Component----------->>>>

const App = () => {
  const [searchfield, setsearchfield] = useState(""); //(value,setValue)
  const [monsters, setmonsters] = useState([]);
  const [filteredmonster, setfilteredmonster] = useState(monsters)

  console.log("rendered")
  const onSearchChange = (event) => {
    const searchfieldStr = event.target.value.toLocaleLowerCase();
    setsearchfield(searchfieldStr);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => setmonsters(users));
  }, []);

  useEffect(()=>{
    const newfilteredmonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfield);
    });
    setfilteredmonster(newfilteredmonster)
  },[monsters,searchfield])

  return (
    <div className="App">
      <h1 className="app-title">Monster Dex</h1>
      <SearchList
        onChangeHandler={onSearchChange}
        PlaceHolder="Search Monsters"
        ClassName="monster-search-box"
      />
      <CardList monstr={filteredmonster} />
    </div>
  );
};



// <<<<---------Class Component----------->>>>


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchfield: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((Response) => Response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchfield = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchfield };
//     });
//   };

//   render() {
//     const { monsters, searchfield } = this.state;
//     const { onSearchChange } = this;

//     const filteredmonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchfield);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Dex</h1>
//         <SearchList onChangeHandler={onSearchChange}  PlaceHolder="Search Monsters" ClassName = "monster-search-box" />
//         <CardList monstr={filteredmonster} />
//       </div>
//     );
//   }
// }

export default App;

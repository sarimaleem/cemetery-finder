import React, {useState} from 'react'; 
import SearchForm from './components/SearchForm';

function App() {

  const [user, setUser] = useState({name: ""});
  const [error, setError] = useState("");

  const Search = details => {
    console.log(details);
  }

  return (
    <div className="App">
      new front end with react
      <SearchForm Search={Search} error={error}/>
    </div>
  );
}

export default App;

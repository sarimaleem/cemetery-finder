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
      <header>
        <ul>
          <li>Denton Muslim Cemetary</li>
          <li>Login | Contact us</li>
        </ul>
      </header>
      <h1>Grave Finder</h1>
      <SearchForm Search={Search} error={error}/>
    </div>
  );
}

export default App;

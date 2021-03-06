import React, {useState} from 'react'

function SearchForm({Search, error}) {
    const [details, setDetails] = useState({name:""}); 

    const sumbitHandler = event => {
        event.preventDefault();
        Search(details);
    }

  return (
    <form onSubmit={sumbitHandler}>
        <div className="form-inner">
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="Enter a Name..." onChange={event => setDetails({...details, name: event.target.value})} value={details.name}/>
                <input type="submit" value ="Search"/>
            </div>
        </div>
    </form>
  )
}

export default SearchForm
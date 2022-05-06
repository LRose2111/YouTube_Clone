import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
// import AuthContext from "../../context/AuthContext";
// import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SearchPage.css";


const SearchPage = () => {

  let key = process.env.REACT_APP_API_KEY
  
  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getSearchResults();
  }, [])

  async function getSearchResults(searchTerm = 'Duck Hunting'){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=4&key=${key}`);
    setSearchResults(response.data.items)
  
  }

  return (
    <div>
      <div className="search-register">
        <Link to="/register" ><b>Click to Register</b></Link>
      </div>
      <div className="search-title"><p className="search-para"><medium className='tube-you'>HUNTR</medium> General Search Page</p></div>
       <div className=""><SearchBar getSearchResults={getSearchResults}/></div>
       <div className="disclaimer-title"><p className="disclaim-para">Welcome to search but <medium className='log-reg-font'>login and/or register</medium> to view the videos</p></div>
       <div className="sresult-title"><h3>Search Results</h3></div>
       <div className="overall-contain-se">
        <div className="search-containr">
            {searchResults.map((element, index) => {
                if (element.snippet){
                    return (
                    <div className='' key ={index}>
                        <img src= {element.snippet.thumbnails.medium.url} className=''></img>
                        <p className="search-font-size"><b>Title:</b> {element.snippet.title}</p>
                    </div>
                    )
                }
            })}
          </div>
        </div> 
    </div>
  );
};

export default SearchPage;
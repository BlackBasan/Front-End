

const baseUrl = "https://api.tvmaze.com"
const searchShows = (query, cb) => { 
    const url = `${baseUrl}/search/shows?q=${query}`;
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>cb(data) )
    
 }
 

 
 const getShowDetails = (id, cb) => { 
    //https://api.tvmaze.com/shows/10000
    const url = `${baseUrl}/shows/${id}`;
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>cb(data) )
  }

  export {searchShows, getShowDetails }
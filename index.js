function Joke(props){
    const [joke, setJoke] = React.useState("")
    function fetchJoke(){
        var options = {
            method: 'GET',
            url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
            headers: {
              'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
              'x-rapidapi-key': '65748579a8msh0f80d7db17667f8p165c7djsn7967c9cd96d6'
            }
          };
          
          axios.request(options).then(function (response) {
              //document.querySelector(".joke").textContent=response.data[0].joke;
              setJoke(response.data[0].joke)
          }).catch(function (error) {
              console.error(error);
          });
    }
    React.useEffect(()=>{
        fetchJoke()
    },[])
    return(
        <div className="wrapper">
            <p className="joke">{joke}</p>
            <button className="btn" onClick={fetchJoke}>New Joke</button>
        </div>
    )
}

function App(){
    return(
        <Joke />
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
// Include React
var React = require("react");

var Search =require("./Children/Search");
var Results =require("./Children/Results");
var Saved =require("./Children/Saved");
var helpers = require('./utils/helpers.js');
// Create the Header component
//  uses a render function which specifies what will be displayed by the component
// {"title": "", "date": "", "url": ""},

var Main = React.createClass({

  getInitialState: function(){
    return {
      searchTerm: "",
      searchStartYear: 0,
      searchEndYear: 0,
      results: [
        
      ],
      history: [] 
    }
  },  

  setTerm: function(term){
    this.setState({
      searchTerm: term
    })
  },

  setStartYear: function(startYear){
    this.setState({
      searchStartYear: startYear
    });
  },

  setEndYear: function(endYear){
    this.setState({
      searchEndYear: endYear
    });
  },

  componentDidUpdate: function(prevProps, prevState){

    if(prevState.searchTerm != this.state.searchTerm || prevState.searchStartYear != this.state.searchStartYear || prevState.searchEndYear != this.state.searchEndYear){
      // Run the query 
      helpers.search(this.state.searchTerm, this.state.searchStartYear, this.state.searchEndYear)
        .then(function(data){
          if (data != this.state.results)
          {
             console.log("Results", data);

            this.setState({
              results: data
            })
          }
        }.bind(this))
        
      }
  },

  componentDidMount: function(){
    helpers.getArt().then(function(response){
      if (response!=this.state.history) {
        console.log(response);
        this.setState({
          history: response.data
        })
      }
    }.bind(this))
  },
  render: function() {
    return (
      <div id ="main ">
        <h1 className="text-center" > New York Times Scrubber</h1>
        <Search setTerm={this.setTerm} setStartYear={this.setStartYear} setEndYear={this.setEndYear}/>
        <Results results={this.state.results} />
        <Saved history={this.state.history}/> 
      </div>
    );
  }
});

module.exports = Main;
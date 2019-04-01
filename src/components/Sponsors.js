import React, {Component} from 'react';
import { getSponsors as getSponsorsAPI} from '../Utils/api';
import Loader from 'react-loader-spinner';

class Sponsors extends Component {

  state = {
    sponsors: [],
    error: null,
    isLoading: false
  }

  componentDidMount() {
    this.getSponsors()
  }

  async getSponsors() {
    this.setState({
      error: null,
      isLoading: true
    })

    try {
      const sponsorsJSON = await getSponsorsAPI();

      console.log(sponsorsJSON)
      const sponsors = [];
      for (let key in sponsorsJSON) {
        sponsors.push({
          ...sponsorsJSON[key],
          id: key
        });
      }
      
  
      this.setState({
        sponsors,
        isLoading: false
      });

    } catch(e) {
      this.setState({
        error: 'an error occured',
        isLoading: false
      });

    }

  }

  render() {
    console.log('state', this.state.sponsors);
    const { sponsors, error, isLoading } = this.state;

    if (isLoading) {
      return (  <Loader 
        type="Puff"
        color="#00BFFF"
        height="100"	
        width="100"
     /> )
    } else if (error) {
      return (<p>{error}</p>)
    } else {
        return(
        <div id = "sponsors">
        <div class = "container">
        <h2 class ="blue text-center"><b>Our Sponsors</b></h2>
        <div class = "row text-center">
          <div class = "col">
            {
              sponsors.map((sponsor) => <Card
              key = {sponsor.id}
              sponsor = {sponsor}/>)
            }
          </div>
        </div>
        </div>
      </div>
      )
    }
  }
}

function Card(props) {
  const {imageURL, websiteURL } = props.sponsor;

  return(
      <a href = {websiteURL}>
        <img class = "sponsorimg" src = {imageURL} alt = "sponsors"></img>
      </a>
  )
}

export default Sponsors

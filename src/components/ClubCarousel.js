import React, { Component } from 'react';
import { getEvents as getEventsAPI } from '../Utils/api';
import Loader from 'react-loader-spinner';

class ClubCarousel extends Component {

  state = {
    events: [],
    error: null,
    isLoading: false
  }

  componentDidMount() {
    this.getEvents();
  }

  async getEvents() {
    this.setState({
      error: null,
      isLoading: true
    })

    try {
      const eventsJSON = await getEventsAPI();
      const events = [];
      for (let key in eventsJSON) {
        events.push({
          ...eventsJSON[key],
          id: key
        });
      }
  
      this.setState({
        events,
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
    console.log('state', this.state.events);
    const { events, error, isLoading } = this.state;

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
      return (
              <div id = "ourclub">
    
          <div className = "container">
    
            <div className = "row">
              <div className = "col">
                <h2 className ="blue"><b>Club Kami</b></h2>
              </div>
              <div className = "col text-right">
                  <a className = "prev blue" href="" title="go back"><i className="fas fa-lg fa-angle-left"></i></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a className = "next blue" href="" title="more"><i className="fas fa-lg fa-angle-right"></i></a>
              </div>
            </div>
            <br/><br/>
    
    
            <section className="carousel slide" data-ride="carousel" id="postsCarousel">
                <div className="container p-t-0 m-t-2 carousel-inner">
                    <div className="row row-equal carousel-item active m-t-0">
                        { events.map((event) => <Card
                           key={event.id}
                           event={event}
                        />) }
                    </div>
                </div>
                </section>
                </div>
                </div>
    
      )
    }

  }

}

function Card(props) {

  const { name, content, tagline, imageURL } = props.event;

  return (
    <div className="col-md-6">
        <div className="card">
            <div className="card-img-top card-img-top-250">
                <img className="img-fluid" src={imageURL} alt="Carousel 1"/>
            </div>
            <div className="card-block p-t-2">
                <h4 className = "clubtitle blue">{name}</h4>
                <p className = "clubdate blue">
                  17 Juni - 26 Juli 2019
                </p>

                <p className = "clubdesc">
                  <b>{tagline}</b>

                  <br/>

                  {content}
                </p>

                <div className = "text-right">
                  <a href = "summerclub19.html">
                    <button className = "rectcirclealt"><b>Mau ikutan dong</b> &nbsp;<span><i className = "fas fa-arrow-right"></i></span></button>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}




export default ClubCarousel;
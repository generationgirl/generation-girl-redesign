import React, { Component } from 'react';
import { getMembers as getMembersAPI} from '../Utils/api';
import Loader from 'react-loader-spinner';

class Members extends Component {

  state = {
    members: [],
    error: null,
    isLoading: false
  }

  componentDidMount() {
    this.getMembers()
  }

  async getMembers() {
    this.setState({
      error: null,
      isLoading: true
    })

    try {
      const membersJSON = await getMembersAPI();
      const members = [];
      for (let key in membersJSON) {
        members.push({
          ...membersJSON[key],
          id: key
        });
      }
  
      this.setState({
        members,
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
    console.log('state', this.state.members);
    const { members, error, isLoading } = this.state;

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
        <div id = "ourteam">
          <div class = "container">
            <div class = "row">
              <div class = "col-lg-4">
                <h2 class ="blue"><b>Our Team</b></h2>
                <br></br>
                <p id = "ourteamtext">Although we all have our own personal stories, our team is bonded together by our vision of building an ecosystem of strong female role models. We hope to inspire the next generation of women in tech, so they can inspire yet <i>another</i> generation! </p>
              </div>
              <div class = "col-lg-8 text-center">
                <div class = "row">
                  {/*<div class = "col">*/}
                    {
                      members.map((member) => <Card
                      key = {member.id}
                      member = {member}/>)
                    }
                      {/* <img class = "imgteam" src = "../assets/nadine.jpg" alt = "nadine"></img>
                      <p class = "teamname"><b>Nadine Siregar</b></p> */}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    }
  }

}

function Card(props) {
  const { fullName, imageURL } = props.member;

  return (
    <div class = "col">
      <img class = "imgteam" src = {imageURL} alt = "members"></img>
      <p class = "teamname"><b>{fullName}</b></p>
    </div>
    
  )
    
}


export default Members;

import React from 'react'
import { getPosts as getPostsAPI } from '../Utils/api';

class Medium extends React.Component {
  state = {
    posts: [],
    error: null,
    isLoading: false
  }
  
  async componentDidMount() {
    this.getPosts()
  }

  async getPosts() {
    this.setState({
      error: null,
      isLoading: true
    })

    try {
      const posts = await getPostsAPI('generationgirl.id');
      console.log(posts);

      this.setState({
        posts,
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
      const { isLoading, error, posts } = this.state;

      if (isLoading) {
          return <h3>Loading</h3>
      } else if (error) {
          return <h3>{error}</h3>
      } else {
        return (
          <div id = "publications">
            <div class = "container">
			        <h2 class ="blue"> <span class = "fab fa-medium"></span> <b>&nbsp;Publications</b> </h2>
              <br/>
              <div class="card">
                {
                      posts.map((post) => <Card
                      key = {post.id}
                      post = {post}/>)
                }
              </div>
            </div>
      </div>
    )
              }
  }
}


function Card(props) {
  const { title, subtitle, image, url } = props.post;

  return (
    <div class = "row mediumcard">
    <div class = "col-lg-6"><img class="img-fluid" src={image} alt="Carousel 1"/></div>
    <div class = "col-lg-6 mediumpost">
      <h4 class = "posttitle blue">{title}</h4>

                <p class = "postdesc">
                  {subtitle}
                </p>

                <div class = "text-right postbutton">
                    <a href={url}>
                      <button class = "rectcirclealt"><b>Read Article</b> &nbsp;<span><i class = "fas fa-arrow-right"></i></span></button>
                  </a>
                </div>
    </div>

  </div>

    
  )
    
}


export default Medium
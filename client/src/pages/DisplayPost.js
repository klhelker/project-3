import React, {Component} from "react";
import axios from "axios";
import "../App.css";
// import {MyContext} from "../MyContext";


class DisplayPost extends Component {
   
    state = {
      Category: this.props.match.params.Category,
      id: this.props.match.params.id,
      post: []
        };
    
  // topic = useContext(MyContext)

  componentDidMount= () => {
    const id = this.props.match.params.id;
    // this.setState((id=this.props.match.params.id));
    console.log(id);
    this.getPost();
            };
 
  getPost = () => {
    
    axios.get(`/api/posts/${this.state.Category}/${this.state.id}`)
    .then(res => {
      console.log(res)
      const data = res.data
      this.setState({ post: data[0] || null });
    })
    .catch(err => this.setState({ error: err.message }));
  };
  displayPost = (post) => {
    console.log(post)
      // return posts.map((post) => (
return (
        <div key={post.id} className='forum-container'>
          <div>{post.Title}</div>
            <div>{post.Author}</div>
            <div>{post.Body}</div>
        </div>
      
       )
  };
    // static contextType = MyContext
    //Rendering
    //QUERY TO DATABASE GRAB DATA ATTRIBUTE VALUE THEN TAKE RESPONSE AND APPEND INTO A CARD POST TITLE, AND ID
    render() {
        // const {} = this.context
        return(
          <div className = "container">
            {this.displayPost(this.state.post)};
          </div>
              )
                };
      };
export default DisplayPost;
import { Component } from "react";
import { Post } from "../Post/Post";
import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Posts2 } from "./Posts2";

export class Posts1 extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            posts: [],
            clickedNewsIds: [],
            gets: [],
        };
    }

    componentDidMount(){
        axios.get(
            'https://project-578af-default-rtdb.firebaseio.com/posts.json',
        ).then(response=> {
            const posts = [];
            for (let key in response.data) {
                posts.push({...response.data[key],id: key});
                console.log(response.data)
            }
            this.setState({
                posts: posts,
            });
        });
    };

    postClickedNewsIds = () =>{
        const { clickedNewsIds } = this.state;
        const uniqueClickedNewsIds = new Set(clickedNewsIds);

        const uniqueIdsArray = Array.from(uniqueClickedNewsIds);

        axios.post(
            'https://project-578af-default-rtdb.firebaseio.com/clickedNewsIds.json',
            { clickedNewsIds : uniqueIdsArray }
        ).then(response => {
            console.log("unique clicked news ids posteds to firebase:", response.data);
        }).catch(error => {
            console.error("Error posting unique:",error);
        });

    }

    getdata = () => {
        axios.get(
            'https://project-578af-default-rtdb.firebaseio.com/Recommended_posts.json',
        ).then(response => {
            const gets = [];
            for (let key in response.data) {
                gets.push({ ...response.data[key], id: key });
                console.log(response.data)
            }
            this.setState({
                gets: gets,
            });
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    };
    

    onPostClickHandler=(id) => {
        this.setState(prevState => ({
            clickedNewsIds: [...prevState.clickedNewsIds, id],
        }));
        console.log(id);
        //console.log(this.state.clickedNewsIds);
    }

    render(){
        const posts=this.state.posts.map((post)=>{
            return <Post key={post.id} post={post} postclicked={this.onPostClickHandler.bind(this,post.id,)}/>;
        });
        
        const gets = this.state.gets.map((get) => {
            return <Posts2 key={get.id} get={get} />;
        });
        

        console.log(this.state.clickedNewsIds);

        return(
            <div>
                <div>{posts}</div>
                <Button onClick={this.postClickedNewsIds}>Can I recommend news?</Button> 
                <Button onClick={this.getdata}>Refresh</Button>
                <div>{gets}</div>
            </div>
            
        )
    }
}
import React, {Component} from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";

class Home extends Component {
    render(){
    return (
        <div>

        <p>Judul</p>
        <hr/>
            <YouTubeComp 
                time="7.12" 
                title="Judul1"
                title="500 views" />
            <YouTubeComp 
                time="7.30" 
                title="Judul2"
                title="3 views" />
            <YouTubeComp 
                time="8.11" 
                title="Judul3"
                title="4000 views" />
            <YouTubeComp 
                time="9.12" 
                title="Judul4"
                title="40 views" />
            <YouTubeComp />
        </div>
    )
    }
}

export default Home;
import React, {Component} from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";

class Home extends Component {
    render(){
    return (
        <div>
{/* 
        <p>Judul</p>
        <hr/>
            <YouTubeComp 
                time="7.12" 
                title="Judul1"
                desc="500 views" />
            <YouTubeComp 
                time="7.30" 
                title="Judul2"
                desc="3 views" />
            <YouTubeComp 
                time="8.11" 
                title="Judul3"
                desc="4000 views" />
            <YouTubeComp 
                time="9.12" 
                title="Judul4"
                desc="40 views" />
            <YouTubeComp /> */}
            <p>Counter</p>
            <hr />
            <Product />
        </div>
    )
    }
}

export default Home;

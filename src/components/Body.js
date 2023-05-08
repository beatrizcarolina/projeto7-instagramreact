import Stories from "./Stories.js";
import Posts from "./Posts.js";
import SideBar from "./SideBar.js";

export default function Body() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories/>
                <Posts/>
            </div>

            <div className="sidebar">
                <SideBar/>
            </div>
        </div>  
    );
}
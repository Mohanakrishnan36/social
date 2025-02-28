import "./topbar.css"
import {Search, Person,Chat,Notifications} from "@mui/icons-material"

export default function Topbar(){
return(
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">MohanMedia</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchicon"/>
                <input placeholder="Search friend or Post" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarlinks">
                <span className="topbarlink">Homepage</span>
                <span className="topbarlink">Timeline</span>
            </div>
            <div className="topbaricons">
                <div className="topbaritemicon">
                    <Person/>
                    <span className="topbariconbadge">1</span>
                </div>
                <div className="topbaritemicon">
                   <Chat/>
                    <span className="topbariconbadge">1</span>
                </div>
                <div className="topbaritemicon">
                    <Notifications/>
                    <span className="topbariconbadge">1</span>
                </div>
            </div>
            <img src="/assets/person/person1.jpg" alt="" className="topbarimg" />
        </div>
         
    </div>
)



}
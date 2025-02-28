import "./sidebar.css"
import {Feed,Chat,Event,Groups} from "@mui/icons-material"
export default function sidebar()
{
    return(
        <div className="sidebar">
        <div className="sidebarwrapper">
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                    <Feed className="sidebaricon"/>
                    <sp className="sidebarlistitemtext">Feed</sp>
                </li>
                <li className="sidebarlistitem">
                    <Chat className="sidebaricon"/>
                    <sp className="sidebarlistitemtext">Chat</sp>
                </li>
                <li className="sidebarlistitem">
                    <Event className="sidebaricon"/>
                    <sp className="sidebarlistitemtext">Event</sp>
                </li>
                <li className="sidebarlistitem">
                    <Groups className="sidebaricon"/>
                    <sp className="sidebarlistitemtext">Groups</sp>
                </li>
            </ul>
            <button className="sidebarbutton"> ShowMore</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>
            <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>  <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>  <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>
              <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>
             <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>
             <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>
            <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>
            <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>
            <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="/assets/person/person2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">Krishnan</span>
                </li>
            </ul>
            

        </div>
        </div>
    )
}
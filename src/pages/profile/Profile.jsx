import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feeds/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">

        <Sidebar/>
        <div className="profileright">
            <div className="Profilerightop">
                <div className="profilecover">
                <img src="/assets/cover.png" alt=""  className="profilecoverimg"/>
                <img src="/assets/4.jpg" alt=""  className="profileuserimg"/>
                </div>
                <div className="profileinfo">
                    <h2 className="profileinfoname">Kumar</h2>
                    <span className="profileinfodesc">Hello everyone</span>
                </div>
            </div>
            <div className="profilerightbottom">
        <Feed/>
        <Rightbar/>
        </div>
        </div>
        </div>
        </>
  )
}

import "./share.css"
import {PermMedia,Label}from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="assets/4.jpgl̥ō" alt="" className="shareprofileimg" />
                <input placeholder="what is your name ?" className="shareinput" />
            </div>
            <hr className="sharehr"/>
            <div className="sharebottom">
              <div className="shareoptions">
                <div className="shareoption">
                  <PermMedia htmlColor="blue" className="shareicon"/>
                  <span className="shareoptiontext">Photo or Video</span>
                </div>
                <div className="shareoption">
                  <Label htmlColor="green" className="shareicon"/>
                  <span className="shareoptiontext">Tag</span>
                </div>

              </div>
              <button className="sharebutton">Share</button>
            </div>
        </div>

    </div>
  )
}

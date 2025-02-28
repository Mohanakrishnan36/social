import "./post.css"
import { MoreVert } from "@mui/icons-material"
export default function Post() {
  return (
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src="/assets/4.jpg" alt="" className="postprofileimg" />
                    <span className="postusername">Mohana krishnan</span>
                    <span className="postdate">1 Month Ago</span>
                </div>
                <div className="posttopright">
                   <MoreVert/>
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">Its my first post</span>
                <img src="assets/6.jpg" alt="" className="postimg"/>
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img src="/assets/like.png" alt="" className="likeicon" />
                    <img src="/assets/heart.png" alt=""  className="likeicon"/>
                    <span className="postlikecounter">20 people liked</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">1 Comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

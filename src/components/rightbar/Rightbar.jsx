import "./rightbar.css"
export default function rightbar({profile})
{ 
  /*  {
    return(
     <>  <div className="rightbar"></div>
     </>
    )
}*/

    const Profilerightbar =() =>
        {
            {
        return  (<>
        <h4 className="rightbartitle">User Information </h4>
        <div className="rightbarinfo">
            <div className="rightbarinfoitem">
                <span className="rightbarinfokey">City:</span>
                <span className="rightbarinfovalue">Chennai</span>
                </div>
                <div className="rightbarinfoitem">
                <span className="rightbarinfokey">From:</span>
                <span className="rightbarinfovalue">Chengalpattu</span>
                </div>
                <div className="rightbarinfoitem">
                <span className="rightbarinfokey">Relationship:</span>
                <span className="rightbarinfovalue">Single</span>
                          </div></div>
                          <h4 className="rightbartitle">Userfiernd</h4>
                          <div className="rightbarfollowings">
                            <div className="rightbarfollowing">
                                <img src="/assets/person/person1.jpg" alt="" className="rightbarfollowingimg" />
                                <span className="rightbarfollowingname">Sai </span></div>
                                <div className="rightbarfollowing">
                                <img src="/assets/person/person2.jpg" alt="" className="rightbarfollowingimg" />
                                <span className="rightbarfollowingname"> Vignesh</span></div>
                                <div className="rightbarfollowing">
                                <img src="/assets/4.jpg" alt="" className="rightbarfollowingimg" />
                                <span className="rightbarfollowingname">Anand</span></div></div></>)
    }
}
    return(
        
        <div className="rightbar">
            <div className="rightbarwrapper">
                <Profilerightbar/>
            </div>
        </div>)
    

}
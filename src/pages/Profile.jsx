import React from 'react'
import "../styles/Profile.css"
const Profile = () => {
  return (
    <div className="Profile">

    <div id="profile_box_info">
            <img src="#" alt="<%=profile_user.name%>" width="100" id="profile_box_image" />

        <section id="profile_box_user_info">
        <div id="profile_box_user_update">
            <h1> *** User Name **</h1>  
            <button id="profile_update_button">
                <h1>Update profile</h1>
               <i class="fa-solid fa-gear"></i>
            </button>
            
        </div>   
        <div id="profile_user_smallInfo">
            <div>                    
                <h1> Posts</h1>
                <p>10</p>
            </div>
            <div>
                 <h1> Followers</h1>
                <p>10</p>
            </div>
            <div>                    
                <h1> Following</h1>
                <p>10</p>
            </div>
        </div>
        <div id="profile_user_bio">
            <p>Trying to watch more sunsets than netflix🔆🔆</p>
            <p>Punjabi Munda 👳👳</p>
            <p>#Bhangra lover🕺🕺</p>
        </div>
    </section>
    </div>
</div>
  )
}

export default Profile
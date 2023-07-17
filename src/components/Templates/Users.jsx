import React from 'react';

 export const UsersTemplate = () => {
 return (
    <body className = "user-body container main">
        <div id = "head-img" className = "row justify-content-center">
        </div>
        <div id = "profile-options" className = "row justify-content-center">
            <div id = "profile" className = "col-sm-4 col-3">
            <img className = "img-responsive center circle" src = " record.getProfilePic( 300, null, record.id ) " alt="Profile Picture" />
            
            </div>
            <div id = "follow" className = "col-sm-2 col-3">
                <p><a href = "/user/ record.username /followers">  record.followers().count()  Followers </a></p>
            </div>
            <div className = "col-sm-2 d-none d-sm-block">
                <p>  record.likes  Likes </p>
            </div>
            <div id = "photos"  className = "col-sm-2 col-3">
        
                <p> Photos </p>

            </div>
            <div className = "col-sm-2 col-3">
                <p> Gallery </p>
            </div>
        </div>
        
        <div className="sidebar d-none d-lg-block">
                <br></br>
            <h4><b>Links</b></h4>
            <button style = "margin-bottom: 15px;" className = "btn rounded"> Gallery </button>
            <a href="#news">Business</a>
            <a href="#contact">TV/Film</a>
            <a href="#about">Music</a>
            <a href="#about">Books</a>
            <br></br>
        
        </div>
        <br></br><p className = "text-center"><strong>User is private</strong></p><br></br>  
        <div id = "about">
            <div className = "text-center">
                <p> Twitter </p>
            </div>
        </div>
        <br></br>
        <div id = "about">
            <div className = "text-center">
                <p> Instagram </p>
            </div>
        </div>
        <br></br>
        <div id = "about">
            <div className = "text-center">
                <p> Facebook </p>
            </div>
        </div>
        <div className = "text-center">
            <button id = "blog" style = "margin-top: 30px;" className = "btn rounded"> Blog </button>
        </div>

        <br></br>
       
        <div className = "content">

            <br></br>
            <div className = "name"> 
            <h3> record.name </h3>
                <div className="dropdown">
                    <a className = "btn btn-primary" href = "../create">Create Post</a>
                    <a className = "btn btn-primary" href = "../account">Edit Account</a>
                    <a className = "btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Invite Friends</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                    </div>
                </div>
            </div>
            
            <label><strong>About the User</strong></label>
            <div className = "user-info">
            
                    
                <p>  record.description  </p>

            </div>
            <br></br>
            <h3> Posts </h3>

            <br></br>
            <div className = "d-md-none">
                <h3> User's Feed </h3>
                <div id = "about">
                <div className = "text-center">
                    <p> Facebook </p>
                </div>
                </div>
                <br></br>
                <div id = "about">
                <div className = "text-center">
                    <p> Twitter </p>
                </div>
                </div>
                <br></br>
                <div id = "about">
                <div className = "text-center">
                    <p> Instagram </p>
                </div>
            </div>
            <br></br>           
        </div>
    </div>
    </body> 
    )
}

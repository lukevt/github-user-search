import React,{useState} from 'react'
import Button from '../../components/Button'
import './styles.css'
import ImageLoader from '../../components/Loaders/ImageLoader'
import InfoLoader from '../../components/Loaders/InfoLoader'
import moment from 'moment'


const Profile = () =>{
    const [name, setName] = useState('');
    const [user, setUser] = useState(
        {
            location:'',
            avatar_url:'',
            public_repos:'',
            followers:'',
            following:'',
            created_at: '',
            company:'',
            blog: '',
            html_url: ''


            




    
        });
    const [isLoading, setIsloading] = useState(true);
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
            event.preventDefault();
            fetch(`https://api.github.com/users/${name}`)
            .then(response=>response.json())
            .then(res=>{
                setUser(res)
                setIsloading(false)
            })
            .catch(err => console.log(err.message))
           
       
    }
    return (
        <div className="profile-container">
            <div className="profile-search-box">
                <h1 className="profile-search-title">
                    find a github profile
                </h1>
                <form action="" className="form-box" onSubmit={handleSubmit}>
                    <input type="text" className="search-input" onChange={handleChange}/>
                    <Button title="search"/>
                </form>
            </div>
            <div className="profile-display-box">
                {isLoading ? <ImageLoader/> : (
                    <div style={{display:"flex", flexWrap:"wrap", marginLeft:"10px", width: "2850px"}}>
                    <div className="profile-avatar" style={{backgroundImage:`url(${user.avatar_url})`}}></div>
                    <a href={user.html_url} style={{textDecoration:"none", }}><Button title="wiew profile"/></a>
                    </div>
                    
                )}
                {isLoading ?  <InfoLoader/> : (
                    <div style={{display:"flex", flexWrap:"wrap", marginLeft:"10px", width: "870px"}}>

                        <div className="profile-content">
                            <p className="repo-top-info">public repositories: {user.public_repos}</p>
                            <p className="repo-top-info">followers: {user.followers}</p>
                            <p className="repo-top-info">following: {user.following}</p>
                        </div>
                        <div className="profile-info-box">
                            <h1 className="profile-info-title">Information</h1>
                            <p className="profile-info-details"><span style={{fontWeight:"bold"}}>Company :</span>{user.company}</p>
                            <p className="profile-info-details"><span style={{fontWeight:"bold"}}>Website/Blog:</span> {user.blog}</p>
                            <p className="profile-info-details"><span style={{fontWeight:"bold"}}>Location:</span> {user.location}</p>
                            <p className="profile-info-details"> <span style={{fontWeight:"bold"}}>Member Since :</span> {moment(user.created_at).calendar()}</p>
                            
                        </div>
                    </div>
                )}
        
           
            </div>
        </div>
    )
}

export default Profile;
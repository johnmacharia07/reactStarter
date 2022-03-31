import React from 'react'
import profiles from '../FakeData'

console.log(profiles)

const ProfileCard = ({image, name, title, description}) => {
  return (
    <div style={{backgroundColor:'white', margin: 15, padding:3, borderRadius: 15 }}>
      <div style={{ display:'flex', justifyContent:'center'}}>
        <img src={image} 
        alt=''
        height='50px'
        style={{ borderRadius:10 }}
        />
        <div>
          <h2 style={{ marginLeft:'10px', color: 'blue'}}>{name}</h2> 
          <h6 style={{ marginLeft:'10px', color: 'blue'}}>{title}</h6> 
        </div>
        
      </div>
      <div style={{ display:'flex', justifyContent:'center' }}>
        <p style={{fontSize: '10px', padding:5}}>{description}
        </p>
      </div>
      
      
    </div>
  )
}

export default ProfileCard
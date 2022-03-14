import React from 'react'
import NavCard  from './NavCard'
import '../styles/NavOptions.css'
const ViewMore=<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M22,12c0-5.52-4.48-10-10-10C6.48,2,2,6.48,2,12s4.48,10,10,10C17.52,22,22,17.52,22,12z M4,12c0-4.42,3.58-8,8-8 c4.42,0,8,3.58,8,8s-3.58,8-8,8C7.58,20,4,16.42,4,12z M16,12l-4,4l-1.41-1.41L12.17,13H8v-2h4.17l-1.59-1.59L12,8L16,12z"/></g></svg>
const NavOptions = ({miPhones,redmiPhones,tv,laptop,home,audio,accessories,fitnessAndLifeStyle}) => {
  return (
    <div className='NavOptions'>
        {miPhones && miPhones.map((item,index)=>(
            <NavCard key={item.image} price={item.price} image={item.image} name={item.name}/>
        ))}
        {redmiPhones && redmiPhones.map((item,index)=>(
            <NavCard key={item.image} price={item.price} image={item.image} name={item.name}/>
        ))}
        {tv && tv.map((item,index)=>(
            <NavCard key={item.image} price={item.price} image={item.image} name={item.name}/>
        ))}
        {laptop && laptop.map((item,index)=>(
            <NavCard key={item.image} price={item.price} image={item.image} name={item.name}/>
        ))}
        {home && home.map((item,index)=>(
            <NavCard key={item.image} price={item.price} image={item.image} name={item.name}/>
        ))}
        {audio && audio.map((item,index)=>(
            <NavCard key={item.image} price={item.price} image={item.image} name={item.name}/>
        ))}
        {fitnessAndLifeStyle && fitnessAndLifeStyle.map((item,index)=>(
            <NavCard key={item.image} price={item.price} image={item.image} name={item.name}/>
        ))}
        {accessories && accessories.map((item,index)=>(
            <NavCard key={item.image} price={item.price} image={item.image} name={item.name}/>
        ))}
        <div className="icon">
            {ViewMore}
            <p>View More</p>

        </div>
        
    </div>
  )
}

export default NavOptions
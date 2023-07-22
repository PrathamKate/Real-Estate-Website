import React from 'react'
import'./Companies.css'
import{motion} from 'framer-motion'
const Companies = () => {
  return (
    <div>
    <section className='c-wrapper'>
<motion.div className="padding innerWdth flexCenter c-conatiner"
 initial={{y:"-20rem",opacity:0}}
 animate={{y:0,opacity:3}}
 transition={{
     duration:3,
     type:"keyframe"
 }}
>
<img src="./images/prologis.png" alt="logo"  />
<img src="./images/tower.png" alt="logo"/>
<img src="./images/equinix.png" alt="logo"  />
<img src="./images/realty.png" alt="logo" />
</motion.div>
    </section>
    </div>
  )
}

export default Companies

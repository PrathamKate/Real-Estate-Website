import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import{motion} from 'framer-motion'
const Hero = () => {
    return (
        <div>
            <section className="hero-wrapper">
                <div className="padding innerWidth flexCenter hero-container">


                    <div className=" flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle"/>
                            <motion.h1
                            initial={{x:"9rem",opacity:0}}
                            animate={{x:0,opacity:3}}
                            transition={{
                                duration:3,
                                type:"spring"
                            }}
                            >
                                Discover<br />
                                Most Suitable<br />
                                Property
                            </motion.h1>
                        </div>
                        <div className=" flexColStart hero-des">
                            <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                               <span className='secondaryText'> Forget all difficulties in finding a residence for you</span>
                        </div>
                        <div className=" flexCenter search-bar">
                            <HiLocationMarker color="blue"/>
                            <input type="text" />
                            <button className="button">Search</button>
                        </div>



                        <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                           <span>
                            <CountUp start={8800} end ={9000} duration={3}/>
                            <span>+</span></span>
                            <span className='secondaryText'>Premium Poduct</span> 
                        </div>
                       

                       
                        <div className="flexColCenter stat">
                           <span>
                            <CountUp start={1950} end ={2000} duration={3}/>
                            <span>+</span></span>
                            <span className='secondaryText'>Happy Customer</span> 
                        </div>
                        

                    
                        <div className="flexColCenter stat">
                           <span>
                            <CountUp  end ={28} />
                            <span>+</span></span>
                            <span className='secondaryText'>Award Winning</span> 
                        </div>
                        </div>
                    </div>




                    <div className="flexCenter hero-right">
                        <motion.div className="image-container"
                        
                        initial={{y:"15rem",opacity:0}}
                            animate={{y:0,opacity:3}}
                            transition={{
                                duration:5,
                                type:"spring"
                            }}>
                            <img src="./images/hero-image.png" alt="" />
                        </motion.div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Hero

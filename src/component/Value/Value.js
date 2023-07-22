import React from 'react'
import './Value.css'
import{
    Accordion,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionState,
    AccordionItem, 
}from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from'../../utils/accordion'
const Value = () => {
  return (
   <section className="v-wrapper">
    <div className="padding innerWidth flexCenter v-container">
      <div className="v-left">
        <div className="image-container">
          <img src="/images/value.png" alt="" />
        </div>
      </div>
      <div className="flexColStart v-right">
        <span className='orangeText'>Our Value</span><span className='primaryText'>Value We Give To You</span><span className='secondaryText'>We believe a good blace to live can make you life better</span>
 <Accordion
 className='accordion'
  allowMultipleExpand={false}
  preExpanded={[0]}>
    {
      data.map((item,i)=>{
        return(
          <AccordionItem className='AcordionItem' key={i} uuid={i}>
            <AccordionItemHeading>
              <AccordionItemButton className='flexCenter AccordionButton'>
                <div className="flexCenter icon">{item.icon}</div>
                <span className="primaryText">{item.heading}
                </span>
                  <div className="flexCenter icon">
                    <MdOutlineArrowDropDown size={20}/>
                  </div>
               
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel className='panel'>
              <p className="secondaryText">{item.detail}</p>
            </AccordionItemPanel>

          </AccordionItem>
        )

        
      })
    }

 </Accordion>
      </div>
    </div>
   </section>
  )
}

export default Value

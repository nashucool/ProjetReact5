import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServiceWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (
   <>
   <ServicesContainer id='services'>
    <ServicesH1>Our Services</ServicesH1>
    <ServiceWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Tracks</ServicesH2>
            <ServicesP>Enjoy the best selection of tracks</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Listen Now</ServicesH2>
            <ServicesP>Discover more music you’ll love based on what you’re already listening to with Listen Now.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Best Online Course</ServicesH2>
            <ServicesP>Enjoy the best selection of online courses</ServicesP>
        </ServicesCard>
    </ServiceWrapper>
   </ServicesContainer>
   </>
  )
}

export default Services
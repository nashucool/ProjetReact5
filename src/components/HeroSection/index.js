import React , {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight

} from './HeroSectionElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
    <>
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='videos.mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Welcome to muzzica</HeroH1>
            <HeroP>
                Sign up for a new account today and begin your new experience
            </HeroP>
            <HeroBtnWrapper onMouseEnter={onHover} onMouseLeave={onHover}>
                <Button to='signup'
                primary='true'
                dark='true'
                smooth={true}
                offset={-80}
                duration={500}
                spy={true} 
                exact='true'>
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

    </>
  )
}

export default HeroSection
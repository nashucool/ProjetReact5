import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';

const Home = () => {
  const[isOpen, setIsOpen] = useState(false); // const qui donne un etat estOuvert false

  const toggle = () => { // arrow fonction qui active setIsOpen (fait linverse de son etat)
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    </>
  )
}

export default Home
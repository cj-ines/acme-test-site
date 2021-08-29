import * as React from "react"
import "../style.scss"
import NavigationBar from "../components/navigation-bar";
import Banner from "../components/banner";
import Insights from "../components/insights";
import WhoWeAre from "../components/whoWeAre ";
import Events from "../components/events";
import Footer from "../components/footer";


// styles
const pageStyles = {
  color: "#232129"
}

const navigation = {
  logoUrl: '/logo.png',
  links: [
    { name: 'Home', url: '/'},
    { name: 'About Us', url: '#about_us_section' }, 
    { name: 'Insights', url: '#insights_section'}, 
    { name: 'Events', url: '#events_section'}, 
    { name: 'Contact Us', url: '#contact_us_section' }
  ]
}

const banner = {
  title: ['ACME Wealth',  'Management Platforms'],
  subTitle: ['Investment excellence.',
    'Diversity of thought.',
    'Organizational strength.']
}

const insights = [{
  text: ['Global Factor', 'Investing Study'],
  color: '',
  imageUrl: '../images/img/insights/1.png'
}, {
  text: ['2019', 'Outlook'],
  color: '#01a49c',
  imageUrl: '../images/img/insights/2.png'
}, {
  text: ['Capital Market', 'Assumptions'],
  color: '#009bfa',
  imageUrl: '../images/img/insights/3.png'
}];

const whoWeAre = [{
  title: 'Our Commitment to Professionals',
  text:  `We help our partners deliver industry leading results with a commitment to excellence, thought-provoking insights and experienced distribution. We are laser focused on our shared goal – helping clients achieve their objectives. `
}]

const events = [{
  title: 'Insight Exchange Network',
  description: 'Join us for this conference showcasing innovation.',
  address: "Chicago, IL",
  date: {
    month:'Jan', day: '28'
  }
}, {
  title: 'Citywide Buyer’s Retreat',
  description:'Find out how banks are responding to the changing future of interest...',
  address: 'The Wagner, New York',
  date: {
    month:'Feb', day: '12'
  }
}, {
  title: 'Research Exchange',
  description:'Find the best online resources to help with your investments...',
  date: {
    month:'May', day: '6'
  },
  address: 'London, England'
}];

// markup
const IndexPage = () => {

  

  return (
    <>
    <NavigationBar navigation={navigation}></NavigationBar>
    <main style={pageStyles}>
      <Banner banner={banner}></Banner>
      <Insights insights={insights}></Insights>
      <WhoWeAre contents={whoWeAre}></WhoWeAre>
      <Events events={events}></Events>
      <Footer phone="111-222-3333"></Footer>
    </main>
    </>
    
  )
}

export default IndexPage

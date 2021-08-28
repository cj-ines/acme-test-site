import * as React from "react"
import "../style.scss"

import Insights from "../components/insights";
import Whoweare from "../components/WhoWeAre";
import Events from "../components/events";
import Footer from "../components/footer";


// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const insights = [{
  text: ['Global Factor', 'Investing Study'],
  color: '',
  imageUrl: ''
}, {
  text: ['2019', 'Outlook'],
  color: '#01a49c',
  imageUrl: ''
}, {
  text: ['Capital Market', 'Assumptions'],
  color: '#009bfa',
  imageUrl: ''
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
    <main style={pageStyles}>
      <Insights insights={insights}></Insights>
      <Whoweare contents={whoWeAre}></Whoweare>
      <Events events={events}></Events>
      <Footer phone="111-222-3333"></Footer>
    </main>
    
  )
}

export default IndexPage

import {Link} from 'react-router-dom'


const About = () => {
  return <div>
      <h3 style={{margin: '10px 0'}}>Made by TA</h3>
      <h4 style={{margin: '10px 0'}}>Version 1.0.0</h4>
      <Link to="/">Go back</Link>
  </div>;
};

export default About;

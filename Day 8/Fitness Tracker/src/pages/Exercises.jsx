import React from 'react';
import '../assets/css/Exercises.css';
import { Link } from 'react-router-dom';
 import top from '../assets/images/img2.jpg'
// import image7 from '../assets/images/img4.png' 
// import image8 from ' ../assets/images/img5.jpg' 
// import image9 from '../assets/images/img4.png' 
// import image10 from '../assets/images/img2.jpg' 


class Exercises extends React.Component{
 
  render(){
    return(
    <>
    <div class="menpage">
    <div className='space'></div>
    <div className='topz'>
      <img src={top} alt="workout img1" className='topimg'/>
      <div className='topright'>
      <p className='toptext'>
      You are not only working out you are preparing to unfold the best version of yourself
      </p>
      <div className='topsmall'>
        <h3 className='zzz'>WORKOUTS</h3>
      </div>
      </div>
    </div>
    <div className='container'>
      <div className='box1'>
      {/* <img src={image7} alt="workout img1" className='topimg'/> */}
      <h3>Cycling</h3>
      <p class="subtext">10 mins</p>
      </div>
      <div className='box2'>
      {/* <img src={image8} alt="workout img1" className='topimg'/> */}
      <h3>Squats</h3>
      <p class="subtext">10 Reps x 2 Sets</p>
      </div>
      <div className='box3'>
      {/* <img src={image9} alt="workout img1" className='topimg'/> */}
      <h3>Bicep curls</h3>
      <p class="subtext">10 Reps x 2 Sets</p>
      </div>
      <div className='box3'>
      {/* <img src={image10} alt="workout img1" className='topimg'/> */}
      <h3>Bench press</h3>
      <p class="subtext">4 Reps x 2 Sets</p>
      </div>
    </div>
    <div className='finish1'><Link to="/"><button className='button1'>Finished</button></Link></div>
    </div>
    </>
    )
  }
}
export default Exercises;
// import React from 'react'
// import ReactDOM from 'react-dom';
// import { useSpring, animated } from 'react-spring';
// import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';


// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

// function SpringCard() {
    
//   const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
//   return (
//     <div class="container" className='box' style={{display: 'flex', width: '100%', paddingLeft: '0px', display: 'inline-block'}}>
//     <div class="col-sm-4" className="cardSpace" style={{display: 'flex', width: '100%', paddingLeft: '0px', marginLeft: '0px'}}>
    
//       <div class="row" style={{width: '16%'}}>
//     <animated.div
//       class="card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: props.xys.interpolate(trans), flex: '1'}}
//     />
//     </div>
//     <div class="row" style={{width: '21.8%'}}>
//      <animated.div
//       class="card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: props.xys.interpolate(trans), flex: '1'}}
//     />
//  </div>
//  <div class="row" style={{width: '21.8%'}}>
//      <animated.div
//       class="card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: props.xys.interpolate(trans), flex: '1'}}
//     />
//  </div>
//  <div class="row" style={{width: '21.8%'}}>
//      <animated.div
//       class="card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: props.xys.interpolate(trans), flex: '1'}}
//     />
//  </div>
//  <div class="row" style={{width: '21.8%'}}>
//      <animated.div
//       class="card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: props.xys.interpolate(trans), flex: '1'}}
//     />
//  </div>
//  {/* <div class="row">
//     <animated.div
//       class="card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: props.xys.interpolate(trans)}}
//     />
//     </div> */}
// </div>
//  </div>
//   )

// }

// ReactDOM.render(<SpringCard />, document.getElementById('root'))

// export default SpringCard
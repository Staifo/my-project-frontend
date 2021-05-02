import React, {useRef, useEffect} from 'react'




const Spinner = () => {
  const spinner = useRef(null)

    return (
        <div ref= {spinner} style={{ width: "100%", display: "flex", flexDirection: 'column'}}>
            <div
              className="spinnerDiv"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                fontFamily: 'Impact',
                fontSize:'20px',
                fontWeight:'bold',
              }}
            >
              <div className="C">C</div>
              <div className="O">O</div>
              <div className="D">D</div>
              <div className="E">E</div>
              <div className="R">R</div>
              <div className="spinner">Junior</div>
            </div>
            <div style={{width: '100%', height: '20px'}}>
              <div className='loading' style={{height: '20px', backgroundColor: 'lightblue', width: '1%'}}></div>
            </div>
          </div>
    )
}

export default Spinner

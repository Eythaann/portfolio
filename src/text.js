import React from "react";
import Typed from 'typed.js';

const TypedReactHooksDemo = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Front-end',
        'Back-end',
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 3500,
      loop: true,
      loopCount: Infinity,
      cursorChar: '_',
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div>
      <div>
        <h2 style={{color:"#fff", fontSize: "40px", fontWeight: "bold" }}><span ref={el} />Developer</h2>
      </div>
    </div>
  );
}

export default TypedReactHooksDemo;
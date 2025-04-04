import {useEffect, useState} from "react";
const CustomCursor = () =>{
    const [cursorPosition, setCursorPosition] = useState({x:0,y:0});

    console.log("x:",cursorPosition.x,"y:",cursorPosition.y);
    useEffect(()=>{
        const handleMouseMove = (e) =>{
            setCursorPosition({x:e.clientX,y:e.clientY});
        }

        document.addEventListener("mousemove",handleMouseMove);
        return () => document.removeEventListener("mousemove",handleMouseMove);
    },[])
    return(
        <div className="customCursor" style={{top:cursorPosition.y, left: cursorPosition.x}}></div>
    )
}

export default CustomCursor;

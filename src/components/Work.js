import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((value, idx) => {
                return(
                    <WorkCard 
                    key={idx}
                    imgsrc={value.imgscr}
                    title={value.title}
                    text={value.text}
                    view={value.view}
                    code={value.code}
                    />
                )
            })}
            </div>
        </div> 
  )
}

export default Work
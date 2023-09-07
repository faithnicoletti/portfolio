import "./WorkCardStyles.css";
import {NavLink} from "react-router-dom";
import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card"> 
                <img src={props.imgsrc} alt="image" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <br/>
                    <div class="pro-btns flex justify-between">
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">Visit App</NavLink>
                    </div> 
                    <div className="pro-btns">
                        <NavLink to={props.code} className="btn">View Code</NavLink>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard
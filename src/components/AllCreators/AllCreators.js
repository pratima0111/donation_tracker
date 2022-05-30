import React from "react";
import data from "../../data.json";
import ActionAreaCard from "./Card";
import './AllCreators.css';
export default function AllCreators() {
    return (
        <div className="all-creators">
            <div>
                <h3>Recommended Creators</h3>
            </div>
            <div className=" grid">
                {data.map((creator, id) => {
                    return(
                        <div >
                            <ActionAreaCard creator={creator} key={id}/>
                        </div>
                    )
                })}
        </div>
        </div>
      
    )
}
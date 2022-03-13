import React from "react";
import "../MainPage.css";
const Repos = (props) => {
   return (
      <div className="page_repos repos">
         <div className="repos__names">
            <a href={props.html_url} className="repos__name">
               {props.name}
            </a>
            <div className="repos__status">
               {props.private == false ? "Public" : "Private"}
            </div>
         </div>
         <div className="repos__appireans">
            <div className="repos__language">
               {props.language == null ? "Null" : props.language}
            </div>
            <div className="repos__data">{props.date}</div>
         </div>
      </div>
   );
};

export default Repos;

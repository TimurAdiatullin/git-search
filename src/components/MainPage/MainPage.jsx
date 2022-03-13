import React from "react";
import { NavLink } from "react-router-dom";
import Page from "../Page/Page";
import "./MainPage.css";
import RepositoriesConteiner from "./Repos/RepositoriesConteiner";
const MainPage = (props) => {
   return (
      <div>
         {props.status == false ? (
            <Page />
         ) : (
            <div className="page">
               <div className="page__left">
                  <img
                     className="page__img"
                     src={props.data.avatar_url}
                     alt=""
                  />
                  <div className="page__login">{props.data.login}</div>
                  <div className="page__nick">{props.nick}</div>
                  <button className="page__btn">Follow</button>
               </div>
               <div className="page__right">
                  <div className="page__navlinks">
							<NavLink to="/repos" className='page__link_repos' activeClassName='page__link_active_repos'>Repositories</NavLink>
							<NavLink to='/follow' className='page__link_follow' activeClassName='page__link_active_follow'>Following</NavLink>
						</div>
						<div className="page__inputs"></div>
                  <div className="page__fitch">
							<RepositoriesConteiner/>
						</div>
               </div>
            </div>
         )}
      </div>
   );
};

export default MainPage;

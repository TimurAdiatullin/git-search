import axios from "axios";
import React from "react";
import MainPage from "../MainPage/MainPage";
import "../Header/Header.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router";
import Page from "../Page/Page";

const FunctionBlock = (props) => {
   let dataForm = () => {
      if (props.github.length != 0) {
         axios
            .get(`https://api.github.com/users/${props.newInputText}`)
            .then((response) => {
               props.setData(response.data);
            });
         axios
            .get(`https://api.github.com/users/${props.newInputText}/repos`)
            .then((response) => {
               props.setRepos(response.data);
            });
         axios
            .get(`https://api.github.com/users/${props.newInputText}/followers`)
            .then((response) => {
               props.setFollow(response.data);
            });
      }
   };
   let updateTextPost = (e) => {
      let text = e.target.value;
      props.updateText(text);
   };
   return (
      <div>
         <div className="header">
            <div className="header__row _conteiner">
               <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M26 0C11.635 0 0 11.635 0 26C0 37.505 7.4425 47.2225 17.7775 50.6675C19.0775 50.895 19.565 50.115 19.565 49.4325C19.565 48.815 19.5325 46.7675 19.5325 44.59C13 45.7925 11.31 42.9975 10.79 41.535C10.4975 40.7875 9.23 38.48 8.125 37.8625C7.215 37.375 5.915 36.1725 8.0925 36.14C10.14 36.1075 11.6025 38.025 12.09 38.805C14.43 42.7375 18.1675 41.6325 19.6625 40.95C19.89 39.26 20.5725 38.1225 21.32 37.4725C15.535 36.8225 9.49 34.58 9.49 24.635C9.49 21.8075 10.4975 19.4675 12.155 17.6475C11.895 16.9975 10.985 14.3325 12.415 10.7575C12.415 10.7575 14.5925 10.075 19.565 13.4225C21.645 12.8375 23.855 12.545 26.065 12.545C28.275 12.545 30.485 12.8375 32.565 13.4225C37.5375 10.0425 39.715 10.7575 39.715 10.7575C41.145 14.3325 40.235 16.9975 39.975 17.6475C41.6325 19.4675 42.64 21.775 42.64 24.635C42.64 34.6125 36.5625 36.8225 30.7775 37.4725C31.72 38.285 32.5325 39.845 32.5325 42.2825C32.5325 45.76 32.5 48.555 32.5 49.4325C32.5 50.115 32.9875 50.9275 34.2875 50.6675C39.449 48.925 43.9341 45.6078 47.1115 41.1828C50.2889 36.7577 51.9986 31.4477 52 26C52 11.635 40.365 0 26 0Z"
                     fill="white"
                  />
               </svg>

               <input
                  type="text"
                  placeholder="Search or jump to...."
                  onChange={updateTextPost}
                  className="header__input"
                  value={props.newInputText}
               />

               <button onClick={dataForm} className="header__btn">
                  /
               </button>
            </div>
         </div>
         <Router>
         	<MainPage
	            nick={props.newInputText}
	            status={props.gitStatus}
	            data={props.github}
	         />
         </Router>
         {/*<Routes>
            <Route
               path="/"
               element={
                  <div className="page__welc">
                     Welcome ot search github user
                  </div>
               }
            />
            <Route
               path={`/${props.newInputText}/repos`}
               element={
                  <MainPage
                     nick={props.newInputText}
                     status={props.gitStatus}
                     data={props.github}
                  />
               }
            />
				</Routes>*/}
      </div>
   );
};

export default FunctionBlock;

import React from 'react';
import "../MainPage.css";
import Repos from './Repos';

const Repositories = (props) => {
	let repositories;
	if (props.repos) {
      repositories = props.repos.map((r) => {
         return (
            <Repos
               html_url={r.html_url}
               name={r.name}
               private={r.private}
               language={r.language}
               date={r.updated_at}
            />
         );
      });
   }
	return (
		<div className='page__repostors'>
			{repositories}
		</div>
	);
};

export default Repositories;
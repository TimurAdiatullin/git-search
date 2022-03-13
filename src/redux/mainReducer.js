const SETDATA = "SET-DATA";
const SETREPOS = "SET-REPOS";
const SETFOLLOW = "SET-FOLLOW";

let inisialState = {
   github: { gitRepos: [], gitFollow: [] },
	gitStatus: false,
};

const mainReducer = (state = inisialState, action) => {
   switch (action.type) {
      case SETDATA: {
         return {
            ...state,
            github: {
               ...action.state,
            },
				gitStatus:true,
         };
      }
      case SETREPOS: {
         return {
            ...state,
            github: { ...state.github, gitRepos: [...action.repos] },
         };
      }
      case SETFOLLOW: {
         return {
            ...state,
            github: {
               ...state.github,
               ...state.gitRepos,
               gitFollow: [...action.follow],
            },
         };
      }
      default:
         return state;
   }
};

export const setDataAC = (state) => ({
   type: SETDATA,
   state: state,
});
export const setReposAC = (repos) => ({
   type: SETREPOS,
   repos: repos,
});
export const setFollowAC = (follow) => ({
   type: SETFOLLOW,
   follow: follow,
});

export default mainReducer;

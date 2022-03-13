import { connect } from "react-redux";
import { updateTextAC } from "../../redux/headerReducer";
import { dataFormAC, setDataAC, setFollowAC, setReposAC } from "../../redux/mainReducer";
import FunctionBlock from "./FunctionBlock";

let mapStateToProps = (state) => {
   return {
      newInputText: state.headerPage.newInputText,
		github: state.mainPage.github,
		gitStatus: state.mainPage.gitStatus
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateText: (text) => {
         dispatch(updateTextAC(text));
      },
		setData: (state) => {
         dispatch(setDataAC(state));
      },
		setRepos: (repos) => {
         dispatch(setReposAC(repos));
      },
		setFollow: (follow) => {
         dispatch(setFollowAC(follow));
      },
   };
};

const FunctionBlockConteiner = connect(mapStateToProps,mapDispatchToProps)(FunctionBlock);
export default FunctionBlockConteiner

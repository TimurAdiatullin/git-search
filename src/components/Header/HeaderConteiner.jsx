import { connect } from "react-redux";
import { updateTextAC } from "../../redux/headerReducer";
import Header from "./Header";

let mapStateToProps = (state) => {
   return {
      newInputText: state.headerPage.newInputText,
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateText: (state) => {
         dispatch(updateTextAC(state));
      },
   };
};

export const HeaderConteiner = connect(mapStateToProps,mapDispatchToProps)(Header);

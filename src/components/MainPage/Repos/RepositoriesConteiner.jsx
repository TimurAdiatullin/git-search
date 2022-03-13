import { connect } from "react-redux"
import Repositories from "./Repositories"

let mapPropsToState = (state) => {
	return{
		repos: state.mainPage.github.gitRepos
	}
	
}

const RepositoriesConteiner = connect(mapPropsToState)(Repositories)

export default RepositoriesConteiner
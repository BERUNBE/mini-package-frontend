import { connect } from 'react-redux'
import MiniPackageWrapper from '../components/MiniPackage/MiniPackageWrapper';
import MiniPackageResource from '../api/MiniPackageResource.js';

const mapStateToProps = state => ({
    miniPackages: state.miniPackageResource.miniPackages
});

const mapDispatchToProps =  dispatch => ({
  refreshTodos: () => {
    MiniPackageResource.getAll()
    .then(res => res.json())
    .then(res => {
        console.log(res);
      dispatch({
        type: 'REFRESH_TODOS',
        payload: res
      })
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniPackageWrapper)

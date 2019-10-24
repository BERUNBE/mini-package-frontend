import { connect } from 'react-redux'
import MiniPackageWrapper from '../components/MiniPackage/MiniPackageWrapper';
import MiniPackageResource from '../api/MiniPackageResource.js';

const mapStateToProps = state => ({
  minipackages: state.miniPackageResource.minipackages
});

const mapDispatchToProps =  dispatch => ({
  refreshMiniPackages: () => {
    MiniPackageResource.getAll()
    .then(res => res.json())
    .then(res => {
        console.log(res);
      dispatch({
        type: 'REFRESH_PACKAGES',
        payload: res
      })
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniPackageWrapper)

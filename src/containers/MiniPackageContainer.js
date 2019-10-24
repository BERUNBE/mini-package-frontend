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
  },
  addDummyData: (randomVal) => {
    const minipackageItem = {
      packageNumber: randomVal,
      receiver: "active",
      phone: 8675309,
      status: "Booked",
      bookingTime: "20190101"
    };
    MiniPackageResource.createPackage(minipackageItem)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'ADD_PACKAGE',
        payload: res
      })
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniPackageWrapper)

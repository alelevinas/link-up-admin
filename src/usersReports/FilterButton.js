import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { reviewApprove as reviewApproveAction } from './reviewActions';

const styles = {
  firstCard: { marginBottom: '1em' },
  singleCard: { marginTop: '1em', marginBottom: '1em' },
  datePicker: { display: 'inline-block', margin: '1em' },
  button: { margin: '1em' },
};

class FilterButton extends Component {
    
    handleClick = () => {
    }

    render() {
        return <RaisedButton style={styles.button} label={'Filtrar'} primary />
    }
}

FilterButton.propTypes = {
    record: PropTypes.object,
    reviewApprove: PropTypes.func,
};

export default connect(null, {
})(FilterButton);
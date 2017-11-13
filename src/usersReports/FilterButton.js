import React, { Component } from 'react';
import restClient from '../restClient';
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

const FILTER_USERS_REPORTS = 'FILTER_USERS_REPORTS';

class FilterButton extends Component {
    
    handleClick = () => {
        const { reviewApprove, record } = this.props;
        reviewApprove(null, null);
    }

    render() {
        return <RaisedButton style={styles.button} label={'Filtrar'} primary onClick={this.handleClick} />
    }
}

FilterButton.propTypes = {
    record: PropTypes.object,
    reviewApprove: PropTypes.func,
};

export default connect(null, {
    reviewApprove: reviewApproveAction,
})(FilterButton);
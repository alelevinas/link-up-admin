import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Block from 'material-ui/svg-icons/content/block';
import { reviewReject as reviewRejectAction } from './reviewActions';

class BlockUserButton extends Component {
    handleReject = () => {
        const { reviewReject, record } = this.props;
        reviewReject(record.userId, record);
    }

    render() {
        const { record } = this.props;
        return (
        	    <FlatButton
			        primary
			        label={'Bloquear'}
			        icon={<Block />}
			        onClick={this.handleReject}
			        color="#bc00a4"
			    />
        );
    }
}

BlockUserButton.propTypes = {
    record: PropTypes.object,
    reviewReject: PropTypes.func,
};

export default connect(null, {
    reviewReject: reviewRejectAction,
})(BlockUserButton);
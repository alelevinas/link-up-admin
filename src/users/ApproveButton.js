import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Block from 'material-ui/svg-icons/content/block';
import Allow from 'material-ui/svg-icons/navigation/check';
import { reviewApprove as reviewApproveAction, reviewReject as reviewRejectAction } from './reviewActions';

class ApproveButton extends Component {
    handleApprove = () => {
        const { reviewApprove, record } = this.props;
        reviewApprove(record.id, record);
    }

    handleReject = () => {
        const { reviewReject, record } = this.props;
        reviewReject(record.id, record);
    }

    render() {
        const { record } = this.props;
        return (
            <span>
                <IconButton onClick={this.handleReject} disabled={record.disable === "true"}><Block color="#bc00a4" /></IconButton>
                <IconButton onClick={this.handleApprove} disabled={record.disable === "false"}><Allow color="#00bcd4" /></IconButton>
            </span>
        );
    }
}

ApproveButton.propTypes = {
    record: PropTypes.object,
    reviewApprove: PropTypes.func,
    reviewReject: PropTypes.func,
};

export default connect(null, {
    reviewApprove: reviewApproveAction,
    reviewReject: reviewRejectAction,
})(ApproveButton);
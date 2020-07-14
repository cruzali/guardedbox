import React, { Component } from 'react';
import { UncontrolledTooltip, Badge } from 'reactstrap';
import Octicon from '@primer/octicons-react'

class ActionIcon extends Component {

    constructor(props) {

        super(props);
        this.id = 'action-icon-' + Math.random().toString().substr(2);

    }

    render() {

        return (

            <div
                id={this.props.id || this.id}
                onClick={this.props.onClick}
                className={'action-icon' + (this.props.className ? ' ' + this.props.className : '')}
                style={this.props.style}>

                <Octicon icon={this.props.icon} />

                {this.props.tooltipText == null ? null :
                    <UncontrolledTooltip placement={this.props.tooltipPlacement || "top"} target={this.props.id || this.id}>
                        {this.props.tooltipText}
                    </UncontrolledTooltip>
                }

                {this.props.badgeText == null ? null :
                    <Badge className="badge-notification" color={this.props.badgeColor}>
                        {this.props.badgeText}
                    </Badge>
                }

            </div>

        );

    }

}

export default ActionIcon;

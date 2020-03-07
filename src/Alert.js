import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>
                    {this.props.text}
                </p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#F2AA4C';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#FF1927';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#ffff00';
    }
}

class OfflineAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#ffffff';
    }
}

export { InfoAlert, ErrorAlert, WarningAlert, OfflineAlert };
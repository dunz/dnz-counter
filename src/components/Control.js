import React, {Component, PropTypes} from 'react';

const propTypes = {
    onPlus: PropTypes.func,
    onSubstract: PropTypes.func,
    onRandomizeColor: PropTypes.func
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubstract: createWarning('onSubstract'),
    onRandomizeColor: createWarning('onRandomizeColor')
}

function createWarning(funcName) {
    return () => console.warn(`${funcName} is not defined.`);
}

class Control extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubstract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        )
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;

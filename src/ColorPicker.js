// ColorPicker.js
import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedColor: null,
        };
    }

    toggleColorPicker = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    handleColorSelect = (color) => {
        this.setState({
            selectedColor: color,
            isOpen: false,
        });

        // Change the background color of the entire page
        document.body.style.backgroundColor = color;
    };

    redirectToGoogle = () => {
        window.location.href = 'https://www.google.com';
    };

    render() {
        const { colors } = this.props;
        const { isOpen, selectedColor } = this.state;

        return (
            <div className="color-picker">
                <button onClick={this.toggleColorPicker}>Pick a color</button>
                {isOpen && (
                    <div className="color-list">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="color-option"
                                style={{ backgroundColor: color }}
                                onClick={() => this.handleColorSelect(color)}
                            />
                        ))}
                    </div>
                )}
                {selectedColor && (
                    <div>
                        <p>You picked: {selectedColor}</p>
                        <button onClick={this.redirectToGoogle}>Back to Google</button>
                    </div>
                )}
            </div>
        );
    }
}

export default ColorPicker;

import React, { Component } from 'react';

class TeamSizeDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        };
    }

    handleDropdownChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <select value={selectedOption} onChange={this.handleDropdownChange}>
                    <input
                        type="text"
                        value={this.state.team}
                        onChange={this.handleChange}
                        name="team"
                        id="team"
                        placeholder="Team Size"
                        required=""
                    />
                    <option value="" disabled>
                        Team Size
                    </option>
                    <option value="0-10">0-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-500">101-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1001-above">1001-above</option>
                </select>
            </div>
        );
    }
}

export default TeamSizeDropdown;

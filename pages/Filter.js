import React from "react";
import PropTypes from 'prop-types';

export default function Filter({ setFilter, filter}) {
    return (
        <label>
            Filter:
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </label>
    )

}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}
import React, {PropTypes} from 'react';

const SelectVoluntaryExcess = ({onChange, name}) => {
    return(
        <select 
            className="quote-voluntary-excess"
            onChange={onChange}
            name={name}>
            <option value="0">£0</option>
            <option value="250">£250</option>
            <option value="500">£500</option>
        </select>      
    );
};

SelectVoluntaryExcess.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default SelectVoluntaryExcess;

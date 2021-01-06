import React from 'react'
function SelectInputValue(props) {

    const { name, value, id } = props
    return (

        <div className="form-group col-12 col-md-6 col-lg-6">

            <select
                name={name}
                id={id}
                className="form-control custom-select-md  mb-3"
                value={value}>

                <option value={value} selected>{value}</option>


            </select>
        </div>

    )
}

export default SelectInputValue
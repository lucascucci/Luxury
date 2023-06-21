import React from 'react'
import Select from 'react-select'

const customStyles = {
    control:(provided)=>({
        ...provided,
        width:'300px',
        }
        )}

const options = [
            { value: 'casio', label: 'Casio' },
            { value: 'Citizen', label: 'Citizen' },
            { value: 'Rolex', label: 'Rolex' }
        ]

const DropComponent = () => {


    return (

        <>
            <Select options={options} styles={customStyles} placeholder='Relojes' />

        </>
    )
}


export default DropComponent;




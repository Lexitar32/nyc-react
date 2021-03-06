import React from 'react'

export default function ButtonContainer(props) {
    const { onClick, name } = props
    return (
        <button

            onClick={onClick}
            style={{
                width: '180px', marginTop: "30px", height: '53px', border: 'none', color: 'white', borderRadius: '10px',
                backgroundColor: '#F8C810 !important', boxShadow: '#686868', padding: '1px !important', fontWeight: 'bolder'
            }}
            type="button"
            className="btn btn-warning"
        >
            {name}

        </button>

    )
}

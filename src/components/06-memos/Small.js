import React from 'react'

export const Small = React.memo(({value}) => {

     console.log('Me ejecute soy el componente Small:(  ');
    return (
        <small>
            {value}
        </small>
    )
});

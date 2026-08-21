import React, { memo } from 'react'

const Child = ({ data }) => {
    // console.log(getFruitsData());
    console.log(data);

    console.log("Child Component Render");

    return (
        <div>Child</div>
    )
}

export default memo(Child)
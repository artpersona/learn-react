import React from 'react'
import HOC from './HOC'
function Add({a,b}) {
    return (
        <div>
            <p>Sum is: {a+b}</p>
        </div>
    )
}
const modifAdd = HOC(<Add a={'1'} b={'2'}/>)
export default modifAdd

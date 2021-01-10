import React from 'react'

export default function HOC(Component) {
    
    // function displayNumbers(a,b){
    //     console.log(a ,' - ',b)
    // }

    return function(props){
        console.log('props is: ',props)
        return <Component/>
    }
}



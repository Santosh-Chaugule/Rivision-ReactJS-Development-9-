//Import Area

import { B } from "./B"



//2.Defination Area
let A = props => {
    console.log(props)
    return <>
        <div>Name: {props.name}<div>Surname:{props.surname}</div><B></B></div>


    </>

}


//3.Export Area
export default A
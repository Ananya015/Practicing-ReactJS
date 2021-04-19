import React from 'react'


const List=(props)=>{
    return (
        <div className="cardstyle bg-yellow ma4 mr4 ml4 mv4 dib pa4 tc grow ba bw1" >
        <img src={props.image}/>
        <h1>{props.name}</h1>
        <p>{props.work}</p>
    </div>
    )
}

export default List;
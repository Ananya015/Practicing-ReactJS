import React from 'react'


const List=(props)=>{
    return (
        <div className="cardstyle bg-yellow ma4 dib pa4 tc ba bw1" >
        <img src={props.image}/>
        <h1>{props.name}</h1>
        <p>{props.work}</p>
    </div>
    )
}

export default List;
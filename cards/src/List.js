import React from 'react'


const List=(props)=>{
    return (
        <div className="cardstyle bg-light-purple ma4 dib pa4" >
        <img src='https://cdn.digital.ai/cdn/ff/hyWK1kypkhOn4ZfvWfNWJjb8-PLCWnDWMscEZ8H4ISo/1599594561/public/styles/maxwidth_300/public/pt_logos/mongodb.png?itok=T7Bcj44-' alt='mongodb logo'/>
        <h1>{props.name}</h1>
        <p>{props.work}</p>
    </div>
    )
}

export default List;
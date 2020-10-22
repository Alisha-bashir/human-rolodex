import React from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

export const Cardlist = (props) => {
    return (
        <div className="card-list">
            {props.humans.map(human => <Card key={human.id} human={human}/>)}
        </div>
    )
}



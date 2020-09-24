import React from 'react';
import './index.css';

export default function EveningSide() {
    return (
        <div className ="evening">
            <h1> Evening Events</h1>

            <figure className = "one">
                <img src = "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?cs=srgb&dl=pexels-jopwell-2422293.jpg&fm=jpg" alt = "Event" />
                <figcaption> Here!!</figcaption>
            </figure>

            <figure className = "two">
                <img src ="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt = "Event" />
                <figcaption> Here!!</figcaption>
            </figure>

            <figure className = "three">
                <img src ="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt = "Event" />
                <figcaption> Here!!</figcaption>
            </figure>

            <figure className = "four">
                <img src ="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Event" />
                <figcaption> Here!!</figcaption>
            </figure>
            
        </div>
    )
}

import React from 'react'

function Events({ events }) {
    return (
        <div className="container container-events">
            <div className="events-list">
                <h1>Upcoming Events</h1>
                <h4>This needs a great tagline, but I’ll fill it in later</h4>
                <div className="events">
                    { events.map((eventContent, index) => 
                        <div className="events-block" key={index}>
                            <div className="events-block-date">
                                { eventContent.date.month}
                                <h3>{ eventContent.date.day}</h3>
                            </div>
                            <h2>{eventContent.title}</h2>
                            <h4>{eventContent.description}</h4>
                            <button>Get more insight</button>
                            <div className="events-block-address">{ eventContent.address}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Events;
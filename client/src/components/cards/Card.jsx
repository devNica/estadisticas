import './card.css'

const Card = ({mainLabel, content, proportion, footerLabel})=>{
    return(
        <div className='card'>
            <span>
                <i className="bi bi-kanban"></i>
            </span>
            <div className="card-middle">
                <div className="left">
                    <h2>{mainLabel}</h2>
                    <h1>{content}</h1>
                </div>
                <div className="progress">
                    <svg>
                        <circle cx={38} cy={38} r={36}/>
                    </svg>
                    <div className="number">
                        <p>{proportion}</p>
                    </div>
                </div>
            </div>
            <h3 className='card-footer'>
                {footerLabel}
            </h3>
        </div>
    )
}

export default Card
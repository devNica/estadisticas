import './card.css'

const Card = ({label, content, proportion})=>{
    return(
        <div>
            <span>
                <i className="bi bi-kanban"></i>
            </span>
            <div className="card-middle">
                <div className="left">
                    <h3>Extension:</h3>
                    <h1>30,567 Km2</h1>
                </div>
                <div className="progress">
                    <svg>
                        <circle cx={38} cy={38} r={36}/>
                    </svg>
                    <div className="number">
                        <p>81%</p>
                    </div>
                </div>
            </div>
            <small className='text-muted'>
                Zona Pacifico
            </small>
        </div>
    )
}

export default Card
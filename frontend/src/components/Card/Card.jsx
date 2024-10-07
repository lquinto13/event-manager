import "./Card.css"
function Card({children}) {
	return (
		<div className="card-container">
			 <span className="card-title">{children}</span>
			 <h2 className="card-amount">24</h2>
		</div>
	)
}

export default Card

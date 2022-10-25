import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return ( 
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={process.env.PUBLIC_URL + card.src} alt="card front" />
              <img 
                className="back" 
                src={process.env.PUBLIC_URL + '/img/cover.png'} 
                onClick={handleClick}
                alt="card back" 
            />
            </div>
          </div>
    )
}

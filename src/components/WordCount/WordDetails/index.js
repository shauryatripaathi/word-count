import './style.css'

export default function WordDetails(props){
    return(
        <div className="details-container">
                <h3>Details</h3>
            <div>
                Words Count : {props.wordCount}
            </div>
            <div>
                Character Count : {props.characterCount}
            </div>
        </div>
    )
}
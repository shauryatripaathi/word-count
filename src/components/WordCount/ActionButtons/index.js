export default function Button(props) {
    return (
        <button onClick={props.handleOnClick}>{props.btn}</button>
    )
}
import styled from 'styled-components'
import './style.css'

export default function WordDetails(props) {

    const handleOnClick = ()=>{
        if(DetailsContainer.style.display === 'none'){
            DetailsContainer.style.display = 'block'
        }
        else{
            DetailsContainer.style.display = 'none'

        }
    }
    const DetailsButton = styled.button`
        background : #000080;
        cursor : pointer;
        padding : 15px;
        text-align : left;
        border : none;
        transition : 0.4s;
    `
    const DetailsContainer = styled.div`
        background : white;
        padding : 40px;

    `
    return (
       <DetailsButton onClick={handleOnClick} >
           <DetailsContainer>
            <h3>Details</h3>
            <div>Words Count : {props.wordCount}</div>               
            <div>Character Count : {props.characterCount}</div>
            <div>Reading time : {props.readingTime}</div>        
           </DetailsContainer>
       </DetailsButton>
    )
}
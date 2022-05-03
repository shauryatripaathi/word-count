import { useState } from 'react'
import Button from '../ActionButtons'
import WordDetails from '../WordDetails'
import './style.css'

export default function TextArea() {
    const [myText, setMyText] = useState('')
    const handleChange = (e) => {
        setMyText(e.target.value)
    }
    const wordCountFunction = () => {
        if (myText === "") {
            return 0;
        }
        let arr = myText.trim().split(' ');
        return arr.length;
    }
    const readingTimeFunction = () => {
        let wordLength = myText.trim().split(' ').length
        return `${Math.trunc(wordLength / 300)}min`;
    }
    const bullet = () => {
        setMyText(`${myText}\n *`)
    }
    return (
        <div className="container">
            <div>
                <textarea
                    className='wordCountWritingArea'
                    value={myText}
                    onChange={handleChange}
                    rows='20' cols='120'
                    placeholder="Start typing..." />
                <div className='button-container'>
                    <Button handleOnClick={() => { setMyText(myText.toUpperCase()) }} btn='UpperCase' />
                    <Button handleOnClick={() => { setMyText(myText.toLowerCase()) }} btn='LowerCase' />
                    <Button handleOnClick={() => { setMyText('') }} btn='Clear All' />
                    <Button handleOnClick={() => { navigator.clipboard.writeText(myText) }} btn='Copy text' />
                    <Button handleOnClick={() => { bullet() }} btn='Bullets' />
                </div>
            </div>
            <WordDetails wordCount={wordCountFunction()} characterCount={myText.length} readingTime={readingTimeFunction()} />
        </div>
    )
}
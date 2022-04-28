import { useState } from 'react'
import Button from '../ActionButtons'
import WordDetails from '../WordDetails'
import './style.css'

export default function TextArea() {
    const [myText, setMyText] = useState('')
    const handleChange = (e) => {
        setMyText(e.target.value)
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

            <div>
                <Button handleOnClick={()=>  {setMyText(myText.toUpperCase())}} btn='UpperCase' />
                <Button handleOnClick={() => { setMyText(myText.toLowerCase()) }} btn='LowerCase' />
                <Button handleOnClick={() => { setMyText('') }} btn='Clear All' />
                <Button handleOnClick={() => {navigator.clipboard.writeText(myText)}} btn='Copy text' />
                
            </div>
        </div>
            <WordDetails wordCount = {0} characterCount = {myText.length}/>
        </div>
    )
}
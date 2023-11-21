import { useState } from 'react'
import './FolowingButton.css'

export default function FolowingButton({ isFolowing }) {

    const [isFolowingState, setIsFolowingState] = useState(isFolowing)
    const text = isFolowingState ? ['Seguir', 'Empezar a seguir'] : ['Siguiendo', 'Dejar de seguir']
    const buttonStyle = isFolowingState ? 'tw-notFolowingButton' : 'tw-followingButton'
    const handleFolowingChange = () => {
        setIsFolowingState(!isFolowingState)
    }
    return (
        <button 
            className={ buttonStyle }
            onClick={ handleFolowingChange}
        >
            <span className='NotHover'>
                { text[0] }
            </span>
            <span className='OnHover'>
                { text[1] }
            </span>
        </button>
    )
}
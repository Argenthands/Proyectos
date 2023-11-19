import { useState } from 'react'
import './FolowingButton.css'

export default function FolowingButton({ isFolowing }) {

    const [isFolowingState, setIsFolowingState] = useState(isFolowing)
    const text = isFolowingState ? 'Seguir' : 'Siguiendo'
    const buttonStyle = isFolowingState ? 'tw-notFolowingButton' : 'tw-followingButton'
    const handleFolowingChange = () => {
        setIsFolowingState(!isFolowingState)
    }
    return (
        <button 
            className={ buttonStyle }
            onClick={ handleFolowingChange}
        >
            { text }
        </button>
    )
}


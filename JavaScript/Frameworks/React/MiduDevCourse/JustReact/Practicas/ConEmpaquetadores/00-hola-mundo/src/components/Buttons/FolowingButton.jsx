import './Style.css'


export default function FolowingButton({ isFolowing }) {
    const text = isFolowing ? 'Siguiendo' : 'Seguir'
    return (
        <button className='tw-standarButton'>{ text }</button>
    )
}


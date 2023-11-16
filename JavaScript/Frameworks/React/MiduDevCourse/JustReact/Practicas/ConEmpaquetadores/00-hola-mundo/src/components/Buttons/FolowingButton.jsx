import './Style.css'


export default function FolowingButton({ isFolowing }) {
    const text = isFolowing ? 'Seguir' : 'Siguiendo'
    const buttonStyle = isFolowing ? 'tw-notFolowingButton' : 'tw-followingButton'
    return (
        <button className={ buttonStyle }>{ text }</button>
    )
}


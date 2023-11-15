// imagen, nombre, nombre de usuario y un botton de seguir
import RandomImage from "../../assets/Perfil.png"
import Button from "../Buttons/Button.jsx"
import './Style.css'

export function Card ({user}){
    const { name, username, isFolowing = false } = user
    return (
        <>
           <article className="tw-followCard">
                <header className="tw-followCard-header">
                    <img src={ RandomImage } alt="Avatar" className="tw-followCard-avatar" />
                    <div className="tw-followCard-info">
                        <strong className="tw-followCard-name">{ name }</strong>
                        <span className="tw-followCard-username">{ username }</span>
                    </div>
                </header>
                <Button text="Seguir" isFolowing />
           </article>
        </>
    )
}
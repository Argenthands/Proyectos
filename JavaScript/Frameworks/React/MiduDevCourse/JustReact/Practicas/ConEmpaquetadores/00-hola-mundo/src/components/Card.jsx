// imagen, nombre, nombre de usuario y un botton de seguir
import RandomImage from "../assets/Perfil.png"
import Button from "./Button"

export function Card ({user}){
    const { name, username } = user
    return (
        <>
           <article>
                <header>
                    <img src={ RandomImage } alt="Avatar" height={ 40 } width={ 40 } />
                    <div>
                        <strong>{ name }</strong>
                        <span>{ username }</span>
                    </div>
                </header>
                <Button text="Seguir" />
           </article>
        </>
    )
}
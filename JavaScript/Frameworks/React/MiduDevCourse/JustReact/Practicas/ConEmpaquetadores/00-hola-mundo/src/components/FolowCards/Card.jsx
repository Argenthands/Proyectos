// imagen, nombre, nombre de usuario y un botton de seguir
import RandomImage from "../../assets/react.svg"
import FolowingButton from "../Buttons/FolowingButton.jsx"
import './Style.css'

export function Card ({user}){
    const { name, username, isFolowing = false } = user || {};
    //const Temporal_enviromet_variable_path = "C:/Users/Username/Documents/Development/Learning/Proyectos/JavaScript/Frameworks/React/MiduDevCourse/JustReact/Practicas/ConEmpaquetadores/00-hola-mundo/src/assets/avatar"
    let avatar = `${username}/${ name }.png`
    avatar = RandomImage
    return (
        <>
           <article className="tw-followCard">
                <header className="tw-followCard-header">
                    <img src={ avatar } alt="Avatar" className="tw-followCard-avatar" />
                    <div className="tw-followCard-info">
                        <strong className="tw-followCard-name">{ name }</strong>
                        <span className="tw-followCard-username">{ username }</span>
                    </div>
                </header>
                <FolowingButton isFolowing={isFolowing} />
           </article>
        </>
    )
}

// imagen, nombre, nombre de usuario y un botton de seguir
import RandomImage from "../../assets/react.svg"
import FolowingButton from "../Buttons/FolowingButton.jsx"
import './Style.css'

export function Card ({ user, formatUserName }) {
    const { name, username, isFolowing = false } = user || {};
    const  avatar = RandomImage
    return (
        <>
            <section className="tw-followCard-container">
                <article className="tw-followCard">
                        <header className="tw-followCard-header">
                            <img src={ avatar } alt="Avatar" className="tw-followCard-avatar" />
                            <div className="tw-followCard-info">
                                <strong className="tw-followCard-name">{ name }</strong>
                                <span className="tw-followCard-username">{ formatUserName(username) }</span>
                            </div>
                        </header>
                        <FolowingButton isFolowing={isFolowing} />
                </article>
            </section>
        </>
    )
}

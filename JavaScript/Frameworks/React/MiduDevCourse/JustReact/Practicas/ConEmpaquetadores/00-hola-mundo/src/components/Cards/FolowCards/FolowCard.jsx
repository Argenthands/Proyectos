
import RandomImage from "../../../assets/react.svg"
import FolowingButton from "../../Buttons/FolowingButton/FolowingButton.jsx"
import "./FolowCard.css"

export function FolowCard ({ user, formatUserName, children }) {
    const { name, username, isFolowing = false } = user || {};

    const  avatar = RandomImage
    return (
        <>
            <section className="tw-followCard-container">
                <article className="tw-followCard">
                        <header className="tw-followCard-header">
                            <img src={ avatar } alt="Avatar" className="tw-followCard-avatar" />
                            <div className="tw-followCard-info">
                                <strong className="tw-followCard-name">{ children }</strong>
                                <span className="tw-followCard-username">{ formatUserName(username) }</span>
                            </div>
                        </header>
                        <FolowingButton isFolowing={isFolowing} />
                </article>
            </section>
        </>
    )
}

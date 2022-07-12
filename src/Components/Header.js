import Path from "../Images/Path.png"

export default function Header() {
    return (
        <div className="header">
            <img src={Path} className="headerlogo"></img>
            <p className="header-text">my travel journal.</p>
        </div>
    )
}
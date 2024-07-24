import './Header.css';

function Header({ updateCards }) {

    return (
        <div className="Header">
            <h1>Notes</h1>
            <button onClick={updateCards}>&#8634;</button>
        </div>
    );
}

export default Header;
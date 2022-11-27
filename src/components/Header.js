import Button from './Button'

const Header = ({ title, toggleForm, show }) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={ show ? 'red' : 'green'} text={ show ? 'Close' : 'Add'} onClick={toggleForm}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'React Task Tracker',
}

export default Header
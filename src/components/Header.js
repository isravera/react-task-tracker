import Button from './Button'

const Header = ({title}) => {

    const onClick = () => alert('clicked')

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'React Task Tracker',
}

export default Header
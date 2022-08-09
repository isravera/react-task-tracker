const Button = ({ color, text, onClick}) => {

    return <button onClick={onClick} style={{backgroundColor : color}} className="btn">{text}</button>
}

Button.defaultProps = {
    color: 'black',
    text: 'btn',
    onClick: function() {
        console.log('button click event handler')
    }
}

export default Button
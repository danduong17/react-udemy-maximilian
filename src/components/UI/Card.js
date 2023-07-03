import './Card.css';

/*  Explanation: 
    props.children is a special prop which is built into React, which every components receives even if we're never setting it explicitly.
    Children is reserved name - the value of this special children drop will always be the content between the opening & closing tags of our custom component.
*/
function Card(props) {
    /* 
        As when making a custom component, the CSS styles that we add to that component (e.g: <Card className='expense-item'>) 
        won't have any effects as it just works well with HTML elements 
        => Pass className through props & constants in order to make CSS styles work
    */
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;
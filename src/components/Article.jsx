const Article = (props) => {

    return ( 
        <article>
            <h3>{props.title}</h3>
            <small>{props.date || 'January 1, 1970'}</small>
            <p>{props.privew}</p>
        </article>
     );
}
 
export default Article;
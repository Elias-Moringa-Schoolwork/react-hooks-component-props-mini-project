const Header = (props) => {
    const blogData=props.blogData
    return (
        <header>
            <h1>{blogData.name}</h1>
        </header>
    );
}
 
export default Header;
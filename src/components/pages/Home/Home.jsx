
const Home = () => {
    return (
        <div className="homePage">
            <div className="titleHome">
                <h1>Welcome to Gymsale</h1>
            </div>
            <div className="subtitleHome">
                <div className="firstOptions">
                    <h3>
                        Find the best products with the lowest prices in the market!
                    </h3>
                    <a href="/products"><button>Search the offers!</button></a>
                </div>
                <img src="https://res.cloudinary.com/dl1e82gxl/image/upload/v1730044517/v2-8ksh7-jzttf_nuzeiv.jpg" alt="" />
            </div>
        </div>
    )
}

export default Home
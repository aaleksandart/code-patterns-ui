// SRP: Vy för att visa vår home page.

// OCP: Kan utökas med funktionalitet genom att lägga
// till fler komponenter.

const homeView = () => {
    const picCoat = require('../assets/images/coat.jpg')
    const picConverse = require('../assets/images/converse.jpg')
    return (
        <>
            <div className='view-bg home-bg'>
                <div className='home-view-container container'>
                    <h1>Clothing Patterns</h1>
                    <img className='home-pic-coat shadow' src={picCoat} alt='' />
                    <img className='home-pic-converse shadow' src={picConverse} alt='' />
                </div>
            </div>
        </>
    )
}

export default homeView


const Beverages = ({data}) =>{


    return(
        <div className="beverages-card">
            <img src={data.strDrinkThumb} alt="" />
            <h2>{data.strDrink}</h2>
            <p><small>{data.strInstructionsIT}</small></p>
        </div>
    )
}

export default Beverages
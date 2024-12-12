import star from "../assets/icons/star.svg";


const StarRating = (props) => {
    const stars = Array(5).fill(0); 

    return (
        <div>
            {stars.map((_, index) => (
                <img
                    key={index}
                    src={star}
                    width={10}
                    alt="Star"
                    className="d-inline-block"
                />
            ))}
            <p className="d-inline-block" style={{ fontSize: "10px"}}>({props.rating}k)</p>
        </div>
    );
};

export default StarRating;

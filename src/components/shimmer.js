

const Shimmer = () =>{
    return  (
        <div className="shimmer-restro">
            {Array(12).fill("").map((e) => (
                <div className="shimmer">
                    <div className="shimmer-img"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer ;
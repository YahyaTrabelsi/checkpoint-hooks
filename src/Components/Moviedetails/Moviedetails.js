import { useEffect,useState } from "react";

const Moviedetails = ({
    match: {
      params: { myid },
    },
    movies,
  }) => {
    const [movie, setmovie] = useState({});
  
    useEffect(() => {
      findmovie();
    }, []);
  
    const findmovie = () => {
      setmovie(movies.find((el) => el.id === myid));

    };
  
    return (
      <div>
      <iframe width="853" height="480" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p className="back">{movie.description}</p>
        
      </div>
    );
  };
  
  export default Moviedetails;
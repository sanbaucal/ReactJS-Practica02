import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import Post from "./post";

function Posts(){
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("episodes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.episodes);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      {data &&
        data.length > 0 &&
        data.map((episode, i) => {
          return (
            <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3" key={i}>
              <Post
                autor={episode.name}
                description={episode.summary.slice(20)}
                img={episode.image.medium}
                fecha={moment(episode.airdate).fromNow()}
                likes={0}
                coments={0}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Posts;

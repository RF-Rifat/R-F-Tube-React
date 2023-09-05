import React from "react";
import PropTypes from "prop-types";
import verified from "../images/verified.png";
import icon from "../images/Icon.png"

const Card = ({ prop }) => {
  if (prop.length === 0) {
    return (
      <div className="grid place-items-center mt-48 w-full">
        <img src={icon} alt="photo" />
        <h2 className="text-4xl mt-4">
          Oops!! Sorry, There is no Content Here
        </h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:px-10 p-4">
      {prop.map((element) => {
        const seconds = element.others.posted_date;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const time =
          hours === 0 && minutes === 0 ? "" : `${hours} hrs ${minutes} min ago`;

        return (
          <div
            key={element.id}
            className="card bg-base-100 shadow-xl mt-5 mb-5"
          >
            <figure className="relative">
              <img
                className="h-60 w-full"
                src={element?.thumbnail}
                alt="photo"
              />
              {time == "" ? (
                ""
              ) : (
                <div className="absolute text-slate-400 bottom-4 right-2 bg-slate-800 p-1 text-sm rounded-md">
                  {time}
                </div>
              )}
            </figure>
            <div className="card-body flex-row">
              <img
                className="h-12 w-12 rounded-full"
                src={element.authors[0].profile_picture}
                alt={element.authors[0].profile_name}
              />
              <div>
                <h2 className="card-title">{element?.title}</h2>
                <div className="flex">
                  <h3>{element.authors[0].profile_name}</h3>{" "}
                  <span className="pl-2">
                    {element.authors[0].verified ? (
                      <img src={verified} alt="Verified" />
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <p>{element.others.views} views</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Card.propTypes = {
  prop: PropTypes.array,
};

export default Card;

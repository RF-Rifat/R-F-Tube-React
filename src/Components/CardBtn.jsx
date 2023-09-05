import React from "react";
import PropTypes, { number, string } from "prop-types";

export function CardBtn({ myProp, onBtnClick }) {
  return (
    <>
      <div className="flex justify-center space-x-4 md:space-x-8">
        {myProp.map((e) => (
          <button
            key={e.category_id}
            onClick={() => {
              if (e.category_id === false) {
              console.log(e.category_id)
              // Do one action
              onBtnClick(1000);
            } else {
              onBtnClick(e.category_id);
              // Do another action
            }}}
            type="button"
            className="bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 focus:bg-red-400 font-medium rounded text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            {e.category}
          </button>
        ))}
      </div>
    </>
  );
}
CardBtn.propTypes = {
  myProp: PropTypes.array,
  onBtnClick: PropTypes.func.isRequired,
};
export default CardBtn;

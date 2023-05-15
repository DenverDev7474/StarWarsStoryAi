import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Story = () => {
  const apiResponse = useSelector(
    (state: RootState) => state.generator.completedStory
  );

  return (
    <div>
      <strong>Generated Story:</strong>
      {apiResponse === "" ? <p>Loading</p> : <p>{apiResponse}</p>}
    </div>
  );
};

export default Story;

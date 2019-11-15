import React from "react";
import GenericComponent from "./GenericComponent";

export default {
  title: "GoodStory"
};

export const good = () => {
  return (
    <GenericComponent initial="nice">
      {state => <div>{state}</div>}
    </GenericComponent>
  );
};

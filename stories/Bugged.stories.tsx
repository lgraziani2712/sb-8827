import React from "react";
import GenericComponent from "./GenericComponent";

export default {
  title: "BuggedStory"
};

export const bugged = () => {
  return (
    <GenericComponent<string>>{state => <div>{state || 'bugged'}</div>}</GenericComponent>
  );
};

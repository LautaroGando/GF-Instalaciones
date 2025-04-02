import React from "react";
import EmptyState from "../EmptyState/EmptyState";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import CreateButton from "../CreateButton/CreateButton";

const RenderEmptyState: React.FC<{ title: string; text?: string }> = ({ title, text }) => {
  return (
    <div>
      <div className="h-[220px]">
        <EmptyState icon={faBoxOpen} title={title} text={text ?? ""} />
      </div>
      <div className="mx-auto max-w-[166px]">
        <CreateButton />
      </div>
    </div>
  );
};

export default RenderEmptyState;

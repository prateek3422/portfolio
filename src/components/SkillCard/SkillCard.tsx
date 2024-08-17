import React from "react";

const SkillCard = ({
  skillName,
  Skills,
}: {
  skillName: string;
  Skills: string;
}) => {
  return (
    <div className="flex gap-4 items-center justify-center mt-6">
      <div className="flex flex-col items-center justify-center border-2 border-Secondary ">
        <h1 className="text-white text-xl font-bold  w-max ">{skillName}</h1>
        <div className="border-t border-Secondary mt-2 ">
          <p className="text-Secondary text-xs font-medium mt-2 text-wrap w-fit">
            {Skills}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

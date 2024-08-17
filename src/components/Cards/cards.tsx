import React from "react";
import Button from "../Button/Button";
import { Github, Radio } from "lucide-react";

const Cards = ({
  tags,
  title,
  description,
  image,
}: {
  tags: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="mt-4 border border-Secondary ">
          <img src={image} alt="" />
          <h1 className="px-2 text-Secondary mt-2 text-sm">{tags}</h1>

          <div className="px-2 flex flex-col border-t border-Secondary mt-2 py-2 gap-2">
            <h1 className="">{title}</h1>
            <p className="text-Secondary text-sm">{description}</p>
            <div className="flex gap-4 py-2">
              <Button className=" flex gap-2 items-center ">
                Live <Radio size={16} />
              </Button>
              <Button className="flex gap-2 items-center">
                Github <Github size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

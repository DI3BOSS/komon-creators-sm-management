import Image from "next/image";
import { useState } from "react";

interface SocialMediaProps {
  networkTitle: string;
  username: string;
  avatar: string;
  postList?: React.JSX.Element;
}

const SocialMedia = ({
  networkTitle,
  username,
  avatar,
  postList,
}: SocialMediaProps): React.JSX.Element => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <article className="social-media-card">
        <h2 className="">{networkTitle}</h2>
        <div className="">
          <Image src={avatar} alt="" className="" />{" "}
          <span className="">{username}</span>
        </div>
        {!isDetailOpen && (
          <>
            {postList}
            <button
              className=""
              onClick={() => {
                ("");
              }}
            ></button>
          </>
        )}
        {isDetailOpen && (
          <>
            {postList}
            <button
              className=""
              onClick={() => {
                ("");
              }}
            ></button>
          </>
        )}
      </article>
    </>
  );
};

export default SocialMedia;

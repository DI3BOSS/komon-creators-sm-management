"use client";
import Image from "next/image";
import { useState } from "react";

interface SocialMediaProps {
  networkIcon: string;
  networkTitle: string;
  username: string;
  avatar: string;
  postList?: React.JSX.Element;
}

const SocialMedia = ({
  networkIcon,
  networkTitle,
  username,
  avatar,
  postList,
}: SocialMediaProps): React.JSX.Element => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const handleOpen = () => {
    setIsDetailOpen(true);
  };

  const handleClose = () => {
    setIsDetailOpen(false);
  };

  return (
    <>
      <article className="flex flex-col justify-center min-w-350 p-20">
        <div className="flex flex-row space-between">
          <Image
            src={networkIcon}
            alt="instagram account"
            className=""
            height={20}
            width={20}
          />
          <h2 className="">{networkTitle}</h2>
        </div>
        <div className="flex flex-row space-between">
          <Image
            src={avatar}
            alt={avatar}
            className=""
            height={30}
            width={30}
          />
          <span className="">{username}</span>
        </div>
        {!isDetailOpen && (
          <>
            {postList}
            <span
              className="inline-flex items-center rounded-md bg-dark-08 px-2 py-[2px] text-dark-100"
              onClick={handleOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-3.5 w-3.5 stroke-dark-100 stroke-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Manage
            </span>
          </>
        )}
        {isDetailOpen && (
          <>
            {postList}
            <span
              className="inline-flex items-center rounded-md bg-dark-08 px-2 py-[2px] text-dark-100"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-3.5 w-3.5 stroke-dark-100 stroke-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Close
            </span>
          </>
        )}
      </article>
    </>
  );
};

export default SocialMedia;

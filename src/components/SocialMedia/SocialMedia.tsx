"use client";
import { useState } from "react";
import Image from "next/image";
import "./SocialMedia.css";
import { PostListStructure } from "@/data/types";

interface SocialMediaProps {
  networkIcon: string;
  networkTitle: string;
  username: string;
  avatar: string;
  postList: PostListStructure | undefined;
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
      <article className="flex flex-col rounded-md bg-white relative w-[200px] card">
        <div className="flex flex-row justify-between items-center m-5">
          <Image
            src={networkIcon}
            alt="instagram account"
            className=""
            height={15}
            width={15}
          />
          <h2 className="ml-2">{networkTitle}</h2>
        </div>
        <div className="flex flex-row justify-between items-center m-5">
          <Image
            src={avatar}
            alt={avatar}
            className="rounded-full"
            height={50}
            width={50}
          />
          <span className="">{username}</span>
        </div>
        {!isDetailOpen && (
          <>
            <span
              className="inline-flex items-center rounded-md bg-dark-08 px-2 py-[2px] text-dark-100 cursor-pointer items-right m-2"
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
            <ul>
              {postList?.map((post) => (
                <li key={post.image} className="p-5">
                  <Image
                    src={post.image}
                    alt={avatar}
                    className="rounded-md pb-2"
                    height={150}
                    width={150}
                  />
                  <div>
                    <p className="p-2">{post.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <span
              className="inline-flex items-center rounded-md bg-dark-08 px-2 py-[2px] text-dark-100 cursor-pointer m-2"
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

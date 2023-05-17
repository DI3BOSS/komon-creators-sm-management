export interface SocialMediaStructure {
  networkIcon: string;
  networkTitle: string;
  username: string;
  avatar: string;
  postList?: React.JSX.Element;
}

export interface PostStructure {
  image: string;
  description: string;
}

export type PostListStructure = PostStructure[];

export type IUser = {
    id: string
    firstname: string
    lastname: string
    username: string
    email: string
    password: string
    imageUrl: string
    bio: string
}

export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
  };
  
  export type IUpdateUser = {
    userId: string;
    firstname: string
    lastname: string
    username: string;
    bio: string;
    imageId: string;
    imageUrl: URL | string;
    file: File[];
  };
  
  export type INewPost = {
    userId: string;
    caption: string;
    file: File[];
    location?: string;
    tags?: string;
  };
  
  export type IUpdatePost = {
    postId: string;
    caption: string;
    imageId: string;
    imageUrl: URL;
    file: File[];
    location?: string;
    tags?: string;
  };

  export type INewUser = {
    firstname: string
    lastname: string
    username: string;
    email: string;
    password: string;
  };
  

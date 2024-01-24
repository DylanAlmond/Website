export interface Thumbnail {
  node: {
    sourceUrl: string,
  }
}

export interface ProjectFields {
  description: string,
  featuredLink: string,
  thumbnail: Thumbnail,
}

export interface Post {
  id: string,
  title: string,
  projectFields: ProjectFields
}

export interface PageInfo {
  id: string;
  title: string;
  slug: string;
}

export interface Page {
  id: string,
  title: string,
  content: string
}
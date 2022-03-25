import { AxiosResponse } from 'axios';
import Constants from 'expo-constants';
import { IItem, IThumbnail } from '../components/horizontal-list/types';
import { HttpClient } from './HttpClient';
import { IGetMedia } from './MediasAdapter';

export interface IGetPosts {
  id: number;
  name: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  page_views: number;
  categories: number[];
  featured_media: number;
}

export class PostsAdapter extends HttpClient {
  protected readonly postsPerPage = 20;

  public viewsPerCategories: { [key: number]: number } = {};

  public featuredMediaIds: number[] = [];

  public constructor() {
    super(Constants.manifest?.extra?.BASE_API_URL);
  }

  public async getPosts(
    categoriesIds: number[],
  ): Promise<AxiosResponse<IGetPosts[]>> {
    return this.instance.get(
      `/posts?categories=${categoriesIds.join(',')}&per_page=${
        this.postsPerPage
      }`,
    );
  }

  public formatPostsForState(posts: IGetPosts[]): IItem[] {
    const items: IItem[] = [];

    posts.forEach(post => {
      post.categories.forEach(categoryId => {
        this.viewsPerCategories[categoryId] =
          (this.viewsPerCategories[categoryId] || 0) + post.page_views;
      });

      this.featuredMediaIds.push(post.featured_media);

      items.push({
        id: post.id,
        title: post.title.rendered,
        description: post.excerpt.rendered,
        content: post.content.rendered,
        thumbnail: {
          id: post.featured_media,
          sourceUri: '',
        },
        categories: post.categories,
      });
    });

    return items;
  }
}

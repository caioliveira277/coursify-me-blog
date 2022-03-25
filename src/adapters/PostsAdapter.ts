import { AxiosResponse } from 'axios';
import Constants from 'expo-constants';
import { IItem } from '../components/horizontal-list/types';
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
  status: string;
  featured_media: number;
}

export class PostsAdapter extends HttpClient {
  public postsPerPage = 10;

  public constructor() {
    super(Constants.manifest?.extra?.BASE_API_URL);
  }

  public async getPosts(
    categoryId: number,
  ): Promise<AxiosResponse<IGetPosts[]>> {
    return this.instance.get(
      `/posts?categories=${categoryId}&per_page=${this.postsPerPage}`,
    );
  }

  public static formatPostsForItems(
    posts: IGetPosts[],
    medias: IGetMedia[],
  ): IItem[] {
    const items: IItem[] = posts.map(post => ({
      id: post.id,
      title: post.title.rendered,
      paragraph: post.excerpt.rendered,
      thumbnail:
        medias.find(media => media.id === post.featured_media)?.media_details
          .sizes.medium.source_url || '',
    }));

    return items;
  }
}

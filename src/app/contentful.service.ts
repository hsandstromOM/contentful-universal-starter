import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getPage(query?: object): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, query))
      .then(res => res.items[0]);
  }

  // Home Page

  getHomePage(homeId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': homeId }))
      .then(res => res.items[0]);
  }

  // Team Page

  getTeamPage(teamId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': teamId }))
      .then(res => res.items[0]);
  }

  getTeamMembers(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'teamMember'
    }, query))
      .then(res => res.items);
  }

  // Team Member Page

  getTeamMember(slug: string): Promise<Entry<any>> {
  return this.getTeamMembers({ 'fields.slug': slug })
  .then(items => items[0]);
  }

  // News Page

  getBlog(blogId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': blogId }))
      .then(res => res.items[0]);
  }
  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: '2wKn6yEnZewu2SCCkus4as'
    }, query))
      .then(res => res.items);
  }

  // News Detail Page

  getBlogPost(slug: string): Promise<Entry<any>> {
  return this.getBlogPosts({ 'fields.slug': slug })
  .then(items => items[0]);
  }

  // Listings Page

  getListings(listingsId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': listingsId }))
      .then(res => res.items[0]);
  }

  getAllListings(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'listing'
    }, query))
      .then(res => res.items);
  }

  // Listing Detail Page

  getListing(slug: string): Promise<Entry<any>> {
  return this.getAllListings({ 'fields.slug': slug })
  .then(items => items[0]);
  }

  // Brokerage Page
  getBrokerage(brokerageId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': brokerageId }))
      .then(res => res.items[0]);
  }

  // Development Page

  getDevelopment(developmentId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': developmentId }))
      .then(res => res.items[0]);
  }

  // getCategories(): Promise<Entry<any>[]> {
  //   return this.client.getEntries({
  //     content_type: '5KMiN6YPvi42icqAUQMCQe'
  //   })
  //   .then(res => res.items);
  // }

  // getCatBlogPosts(query?: string): Promise<Entry<any>[]> {
  // return this.getBlogPost({ 'fields.category.fields.slug': query? })
  // .then(items => items[0])
  // }

  // getCategories(): Promise<Entry<any>[]> {
  //   return this.client.getEntries({
  //     content_type: '5KMiN6YPvi42icqAUQMCQe'
  //   })
  //   .then(res => res.items);
  // }

  getBuyersPage(buyersPageId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': buyersPageId }))
      .then(res => res.items[0]);
  }
  getSellersPage(sellersPageId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': sellersPageId }))
      .then(res => res.items[0]);
  }
  getFooter(query?: object): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'footer'
    }, query))
      .then(res => res.items[0]);
  }
}

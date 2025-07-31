
import { IServiceQuery } from '../modules/service/service.interface';


class ApiFeatures {
  query: any;
  queryString: IServiceQuery;
  pagination: any;

  constructor(query: any, queryString: IServiceQuery) {
    this.query = query;
    this.queryString = queryString;
    this.pagination = {};
  }



  /**
   * Sort the query
   */
  sort(): this {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  /**
   * Limit fields
   */
 

  /**
   * Paginate results
   */

}

export default ApiFeatures;

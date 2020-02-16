type RequestParams = {
  [key: string]: string | number | boolean;
};

type RequestBody = {
  [key: string]: any;
};

class ApiClient {
  baseUrl = process.env.API_URL;

  constructUrl(url: string, params?: RequestParams) {
    let urlString = `${this.baseUrl}/${url}`;

    if (params) {
      urlString += '?';
      Object.keys(params).forEach((key, idx, arr) => {
        urlString += `${key}=${encodeURIComponent(params[key])}`;

        if (idx < arr.length - 1) {
          urlString += '&';
        }
      });
    }

    return urlString;
  }

  async handleResponse(pendingResponse: Promise<Response>) {
    const response = await pendingResponse;

    if (response.ok) {
      return response.json();
    }

    return response;
  }

  get(url: string, query?: RequestParams) {
    return this.handleResponse(fetch(this.constructUrl(url, query)));
  }

  // post(url: string, query?: RequestParams, body?: RequestBody) {
  //   return this.handleResponse(
  //     fetch(
  //       this.constructUrl(url, query),
  //       {

  //       }
  //     )
  //   )
  // }
}

export const apiClient = new ApiClient();

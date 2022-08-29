import { apis } from "service";
import { TOKEN_TWEETER } from "../constants/credentials"

const COMMON_URL = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/`;

const API_URLS = {
  GET_FOLLOWING: `${COMMON_URL}users/462967164/following`,
  GET_RECENTQUERY_DHI_WISE: `${COMMON_URL}tweets/search/recent?query=DhiWise`,
  GET_RECENTQUERY_DHI_WISE1: `${COMMON_URL}tweets/counts/recent?query=DhiWise`,
  GET_FOLLOWERS: `${COMMON_URL}users/462967164/followers`,
  GET_USERS: `${COMMON_URL}users/462967164?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld`,
};

export const getFollowing = (payload) =>
  apis.get(API_URLS.GET_FOLLOWING, {
    ...payload,
    headers: {
      Authorization:
        `Bearer ${TOKEN_TWEETER}`,
      ...payload?.headers,
    },
  });

export const getRecentqueryDhiWise = (payload) =>
  apis.get(API_URLS.GET_RECENTQUERY_DHI_WISE, {
    ...payload,
    headers: {
      Authorization:
        `Bearer ${TOKEN_TWEETER}`,
      ...payload?.headers,
    },
  });

export const getRecentqueryDhiWise1 = (payload) =>
  apis.get(API_URLS.GET_RECENTQUERY_DHI_WISE1, {
    ...payload,
    headers: {
      Authorization:
        `Bearer ${TOKEN_TWEETER}`,
      ...payload?.headers,
    },
  });

export const getFollowers = (payload) =>
  apis.get(API_URLS.GET_FOLLOWERS, {
    ...payload,
    headers: {
      Authorization:
        `Bearer ${TOKEN_TWEETER}`,
      ...payload?.headers,
    },
  });

export const getUsers = (payload) =>
  apis.get(API_URLS.GET_USERS, {
    ...payload,
    headers: {
      Authorization:
        `Bearer ${TOKEN_TWEETER}`,
      ...payload?.headers,
    },
  });

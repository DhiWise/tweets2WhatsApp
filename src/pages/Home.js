import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/followinglist">FollowingList</Link>
        </li>
        <li>
          <Link to="/">TwitterFeed</Link>
        </li>
        <li>
          <Link to="/recenttweets">RecentTweets</Link>
        </li>
        <li>
          <Link to="/followerslist">FollowersList</Link>
        </li>
        <li>
          <Link to="/profilepage">ProfilePage</Link>
        </li>
        <li>
          <Link to="/mytotaltweets">MyTotalTweets</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
import React from "react";
import MyTotalTweets from "pages/MyTotalTweets";
import ProfilePage from "pages/ProfilePage";
import FollowersList from "pages/FollowersList";
import RecentTweets from "pages/RecentTweets";
import TwitterFeed from "pages/TwitterFeed";
import FollowingList from "pages/FollowingList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TwitterFeed />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/followinglist" element={<FollowingList />} />
        <Route path="/recenttweets" element={<RecentTweets />} />
        <Route path="/followerslist" element={<FollowersList />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/mytotaltweets" element={<MyTotalTweets />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;

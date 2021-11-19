import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import HeroOne from "../container/home-one/hero";
import TredingArticle from "../container/home-one/trending-article";
import FromFollowingArea from "../container/home-one/from-following";
import TrendingTopics from "../container/home-one/trending-topic";
import FeaturedVideoArea from "../container/home-one/featured-video";
import AddBanner from "../container/home-one/add-banner";
import HeroArea from "../container/home-six/hero/index.jsx";
import TrendingArea from "../container/home-six/trending/index.jsx";
import RecentArticlesArea from "../container/home-two/recent-article/index.jsx";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            {/* <HeroOne/> */}
            <HeroArea />
            {/* <TredingArticle/> */}
            <RecentArticlesArea />
            <TrendingTopics />
            {/* <TrendingArea /> */}
            {/* <FromFollowingArea />
            <FeaturedVideoArea /> */}
            {/* <AddBanner /> */}
        </Layout>
    );
};

export default IndexPage;

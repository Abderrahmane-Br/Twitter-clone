import React, { useEffect } from "react";
import Heading from "../feed/Heading";
import SearchBar from "../utilities/SearchBar";
import Widget from "./Widget";
import { trends } from "../../data/trends";
import { tweets } from "../../data/tweets";
import Trend from "./Trend";
import FollowProfile from "./FollowProfile";

function Widgets() {

    useEffect(() => {
        const widgets = document.querySelector(".widgetsContainer");
        const height = widgets.getBoundingClientRect().bottom;

        window.addEventListener("scroll", () => {
            let winHeight = window.innerHeight * 75 / 100;
            let offset = window.pageYOffset;
            if (height - offset > winHeight)
                // console.log("true");
                widgets.style = `position: sticky; top: -${offset}px`
        })

    }, [])

    return (
        <div className="widgetsContainer">
            <Heading
                leftComponent={<SearchBar placeholder="Search Twitter" />}
                rightComponent={<></>}
            />
            <Widget
                name="trends"
                title="Trends for you"
                content={
                    trends.map((trend, index) => (
                        <Trend
                            key={index}
                            {...trend}
                        />
                    ))
                }
            />
            <Widget
                name="follow"
                title="Who to Follow"
                content={tweets.map(tweet => (
                    <FollowProfile
                        profilePicUrl={tweet.profilePicUrl}
                        profileName={tweet.profileName}
                        username={tweet.username}
                        isVerified={tweet.isVerified}
                    />
                ))}
            />
        </div>
    )
}

export default Widgets
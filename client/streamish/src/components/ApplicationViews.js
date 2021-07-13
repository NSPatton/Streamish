import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import UserVideos from "./UserVideos";
import VideoDetails from "./VideoDetails"

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <VideoList />
            </Route>

            <Route path="/users/:id">
                <UserVideos />
            </Route>

            <Route path="/videos/add">
                <VideoForm />
            </Route>

            <Route path="/user/:id" exact>
                <UserVideos />
            </Route>

            <Route path="/videos/:id">
                <VideoDetails />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;

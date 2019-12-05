import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../components/Home/Home"
import NewVenue from "../components/Home/Venue/NewVenue"
import EditVenue from "../components/Home/Venue/EditVenue"

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/newVenue" exact component={NewVenue} />
        </Switch>
    </Router>
)
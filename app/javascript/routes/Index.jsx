import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../components/Home/Home"
import NewVenue from "../components/Home/Venue/NewVenue"

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" exact component={NewVenue} />
        </Switch>
    </Router>
)
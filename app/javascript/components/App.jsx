import React from "react";
import Routes from "../routes/Index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default props => <>{Routes}</>;

library.add(fab);

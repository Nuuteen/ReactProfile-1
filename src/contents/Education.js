import React, {Component} from "react";
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Software Enginerring" where="University" from="2022" to="Present"/>
                <Widecard title="Enginerring" where="University" from="2022" to="2022"/>
            </div>
        )
    }
}

export default Education;
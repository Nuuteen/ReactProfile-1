import React, {Component} from "react";
import Social from '../components/Social';
// import profilepic from '../img/profiled'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component{
    render(){
        return(
            <div className="condiv home">
                <img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/259799388_4557189977701675_4976598671684318867_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7wT3QBzRn8Qiyw3yOT9Q8U4l_cMBJqsBTiX9wwEmqwMiRTl68BM95FnEGq3cIdHf_EFphpxGuC_gba06h7eY4&_nc_ohc=8suUyr-EYIMAX85agEg&tn=1me4uCaANkGg8u39&_nc_ht=scontent.fbkk5-3.fna&oh=00_AT-bHJD34oKBysVKqNqBYAZ8XNE4wj99UsUfk_rLYI3iwQ&oe=6248F369" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Jakkirt.','My Profile.']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;
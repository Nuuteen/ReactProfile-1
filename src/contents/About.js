import React , { Component } from 'react'
// import profilepic from '../img/profile.jpg'

class About extends Component {
    render() {
        return(
            <div className='condiv about'>
                <h1 className='subtopic'>About Me</h1>
                <img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/259799388_4557189977701675_4976598671684318867_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7wT3QBzRn8Qiyw3yOT9Q8U4l_cMBJqsBTiX9wwEmqwMiRTl68BM95FnEGq3cIdHf_EFphpxGuC_gba06h7eY4&_nc_ohc=8suUyr-EYIMAX85agEg&tn=1me4uCaANkGg8u39&_nc_ht=scontent.fbkk5-3.fna&oh=00_AT-bHJD34oKBysVKqNqBYAZ8XNE4wj99UsUfk_rLYI3iwQ&oe=6248F369" alt="profile" className="profilepic"/>
                {/* <img src={profilepic} /> */}
                <h3>Hi, I'm Jakkirt </h3>
                <p>TEST About</p>
            </div>
        );
    }
}

export default About;
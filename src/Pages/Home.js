import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub"
import "../Styles/Home.css"
import { Link } from "@mui/material";

const Home = () => {
    return <>
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Nurzhan</h2>
                <div className="prompt">
                    <p>A software developer with a passion for learning and creating.</p>
                    <Link href=""><LinkedInIcon/></Link>
                    <Link href="mailto:nurzanilasov@gmail.com"><EmailIcon/></Link>
                    <Link href="https://github.com/nurzhanitto"><GitHubIcon/></Link>
                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, Next.js, HTML, CSS, TailwindCSS, Ant Design, MaterialUI, BootStrap, StyledComponents, 
                            React Native, Redux, 
                            Ionic, NPM, Yarn, 
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, NestJS, ExpressJS, FastAPI, JWT,
                            Postgres, MongoDB, TypeORM
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript, TypeScript, Python</span>
                    </li>
                </ol>
            </div>
        </div>
    </>
}

export default Home
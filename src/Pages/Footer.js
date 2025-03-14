import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Styles/Footer.css";
import { Link } from "@mui/material";


const Footer = () => {
    return <>
        <div className="footer">
            <div className="socialMedia">
                <Link href="https://www.instagram.com/mr_1lyasov?igsh=MnBsaXM1N2Uybnpl&utm_source=qr"><InstagramIcon/></Link>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
            </div>
            <p>&copy; 2025 mr_1lyasov.com</p>
        </div>
    </>
}

export default Footer
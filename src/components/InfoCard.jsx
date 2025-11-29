import qrPic from "../images/image-qr-code.png"
import styles from "./InfoCard.module.css"

function InfoCard(){
    return (
    <body>
        <div className={styles.main_container}>
            <div className={styles.qr_code_container}>
                <img className={styles.qr_code} src={qrPic}></img>
            </div>
            <div className={styles.text_container}>
                <div className={styles.info_card_text_title}>
                    <strong>Improve your front-end skill by building projects</strong>
                </div>
                <div className={styles.alt_text}>
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </div>
            </div>
        </div>
    </body>
    );
}
export default InfoCard;
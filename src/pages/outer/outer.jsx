import styles from './outer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Co_progressBar from './props/progressBar/progressBar';
import Co_panel from './props/panel/panel';

import Boima from '~/src/assets/images/Boima.jpg';


function Co_outer() {
    return(
        <div className={styles.main_outer}>

            <div className={styles.box_left}>
                <div className={styles.self_image}>
                    <div className={styles.scaled_image_container}>
                        <img src={Boima} alt="Scaled Image"></img>
                    </div>

                    <p>Boima</p>
                </div>

                <div className={styles.box_left_body}>
                    <div className={styles.contacts}>
                        <div className={styles.contact_bar}>
                            <FontAwesomeIcon icon="fa-solid fa-briefcase" className={styles.ic1}/>
                            <p>Developer</p>
                        </div>

                        <div className={styles.contact_bar}>
                            <FontAwesomeIcon icon="fa-solid fa-house-chimney" className={styles.ic2}/>
                            <p>Da Nang, Vietnam</p>
                        </div>

                        <div className={styles.contact_bar}>
                            <FontAwesomeIcon icon="fa-solid fa-envelope" className={styles.ic3}/>
                            <p>boimache27@gmail.com</p>
                        </div>

                        <div className={styles.contact_bar}>
                            <FontAwesomeIcon icon="fa-solid fa-phone" className={styles.ic4}/>
                            <p>0948974395</p>
                        </div>
                    </div>

                    <div className={styles.skills}>
                        <div className={styles.heading}>
                            <FontAwesomeIcon icon="fa-solid fa-asterisk" className={styles.ic}/>
                            <h3>Skills</h3>
                        </div>

                        <Co_progressBar progress_title='Adobe Photoshop'
                            progress_percent={90}
                        />

                        <Co_progressBar progress_title='Photography'
                            progress_percent={80}
                        />

                        <Co_progressBar progress_title='Illustrator'
                            progress_percent={75}
                        />

                        <Co_progressBar progress_title='Media'
                            progress_percent={50}
                        />
                    </div>

                    <div className={styles.languages}>
                        <div className={styles.heading}>
                            <FontAwesomeIcon icon="fa-solid fa-earth-asia" className={styles.ic}/>
                            <h3>Languages</h3>
                        </div>

                        <Co_progressBar progress_title='English'
                            progress_percent={100}
                            progress_height={20}
                            show_text={false}
                        />

                        <Co_progressBar progress_title='Spanish'
                            progress_percent={79}
                            progress_height={20}
                            show_text={false}
                        />

                        <Co_progressBar progress_title='German'
                            progress_percent={54}
                            progress_height={20}
                            show_text={false}
                        />                        
                    </div>
                </div>
            </div>


            <div className={styles.box_right}>
                <div className={styles.box_right_pad}>
                    <div className={styles.heading}>
                        <FontAwesomeIcon icon="fa-solid fa-suitcase" className={styles.ic}/>
                        <h3>Work Experience</h3>
                    </div>                    

                    <Co_panel panel_title='Front End Developer' 
                        panel_time_text='Jan 2015 - '
                        panel_time_current='Current'
                        panel_description='Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in  deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea  et odio, unde doloremque repellendus iure, iste.'
                    />
                    
                    <Co_panel panel_title='Web Developer / something.com' 
                        panel_time_text='Mar 2012 - Dec 2014'
                        panel_description='Consectetur adipisicing elit. Praesentium magnam consectetur vel in  deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea  et odio, unde doloremque repellendus iure, iste.'
                    />
                    
                    <Co_panel panel_title='Graphic Designer / designsomething.com' 
                        panel_time_text='Jun 2010 - Mar 2012'
                        panel_description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        showBorder={false}
                    />
                </div>

                <div className={styles.box_right_pad}>
                    <div className={styles.heading}>
                        <FontAwesomeIcon icon="fa-solid fa-certificate" className={styles.ic}/>
                        <h3>Education</h3>
                    </div>                    

                    <Co_panel panel_title='VKU University' 
                        panel_time_text='June 2023 - '
                        panel_time_current='Current'
                        panel_description='Engineering degree'                    
                    />
                    
                    <Co_panel panel_title='W3Schools.com' 
                        panel_time_text='Jan 2022 - '
                        panel_time_current='Current'
                        panel_description='Web Development! All I need to know in one place'                    
                    />
                    
                    <Co_panel panel_title='Roblox studio' 
                        panel_time_text='July 2020 - '
                        panel_time_current='Current'
                        panel_description='Still burning, i see lights ahead.'  
                        showBorder={false}                  
                    />
                </div>
            </div>

        </div>
    );
}

export default Co_outer
import styles from './panel.module.css';
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


function Co_panel({
    panel_title = "panel_title",
    panel_time_text = "panel_time_text",
    panel_time_current = "",
    panel_description = "panel_description",
    showBorder = true
}) {

    const mainPanelRef = useRef();
    const spanRef = useRef();

    useEffect(() => {
        if (!showBorder && mainPanelRef.current) {
            mainPanelRef.current.style.border = "none";
        }

        if (panel_time_current === "" && spanRef.current) {
            spanRef.current.style.padding = "0";
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className={styles.main_panel} ref={mainPanelRef}>

            <h3>{panel_title}</h3>

            <div className={styles.panel_time}>
                <FontAwesomeIcon icon="fa-regular fa-calendar-days" className={styles.ic}/>
                <p>{panel_time_text}<span ref={spanRef}>{panel_time_current}</span></p>
            </div>

            <p>{panel_description}</p>

        </div>
    );
}


Co_panel.propTypes = {
    panel_title: PropTypes.string,
    panel_time_text: PropTypes.string,
    panel_time_current: PropTypes.string,
    panel_description: PropTypes.string,
    showBorder: PropTypes.bool,
}


export default Co_panel
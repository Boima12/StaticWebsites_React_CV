import styles from './progressBar.module.css';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';


function Co_progressBar({
    progress_title = "progress title",
    progress_height = 16,
    progress_percent = 0,
    show_text = true
}) {

    const progress_style = {
        height: `${progress_height}px`
    }

    const progress_currentRef = useRef();
    useEffect(() => {
        progress_currentRef.current.style.width = `${progress_percent}%`;
    }, [progress_percent]);

    let show_text_style = {};  
    if (!show_text) {
        show_text_style = { opacity: 0, visibility: "hidden" };
    }

    return(
        <div className={styles.main_progressBar}>
            <h3>{progress_title}</h3>

            <div className={styles.progress} style={progress_style}>
                <div className={styles.progress_current} ref={progress_currentRef}>
                    <p style={show_text_style}>{progress_percent}%</p>
                </div>
            </div>

        </div>
    );
}


Co_progressBar.propTypes = {
    progress_title: PropTypes.string,
    progress_percent: PropTypes.number,
    progress_height: PropTypes.number,
    show_text: PropTypes.bool,
};



export default Co_progressBar
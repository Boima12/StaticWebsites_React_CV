import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faBriefcase, faHouseChimney, faEnvelope, faPhone, faAsterisk, faEarthAsia, faSuitcase, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faInstagram, faSnapchat, faPinterest, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile, faCalendarDays } from '@fortawesome/free-regular-svg-icons';

// grouping for easier organize
const iconGroup1 = [ faHouse, faBriefcase, faHouseChimney, faEnvelope, faPhone, 
    faAsterisk, faEarthAsia, faSuitcase, faCalendarDays, faCertificate,
    faSquareFacebook, faInstagram, faSnapchat, faPinterest, 
    faXTwitter, faLinkedinIn, faFaceSmile
];

// Add all icons to the library
library.add(...iconGroup1);
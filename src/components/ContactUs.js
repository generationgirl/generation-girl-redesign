import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faHeart, faAddressCard, faMailBulk } from '@fortawesome/free-solid-svg-icons';

function ContactUs(props) {
  return(
    <div id = "foot">
    <div className = "container">
      <div className = "row text-center">
        <div className = "col-md-4">
          <a href = "http://instagram.com/generationgirl.id">
            <button class="btncircle blue">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </button>
					</a>
        </div>
        <div className = "col-md-4">
          <a href = "https://www.paypal.me/GenerationGirl"> 
            <button class="btncircle blue">
              <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
            </button>
					</a>
        </div>
        <div className = "col-md-4">
          <a href = "mailto:contactus@generationgirl.org">
            <button class="btncircle blue">
              <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
            </button>
					</a>
        </div>
      </div>
    </div>
  </div>
  )
  
}

export default ContactUs
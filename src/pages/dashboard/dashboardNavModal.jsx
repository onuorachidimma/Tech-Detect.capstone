import React from 'react';
import styles from "../../components/navigation/navigation.module.css"
import { useEffect } from 'react';

import buttons  from "../../components/buttons/buttons.module.css"


import BlackSideBAr from "./blackSideBAr"
import SearchAndProfilePic from "./searchAndProfilePic"
import { Routes, Route, Link } from 'react-router-dom'
import Overview from "./dashboardSections/overview"
import IncidenceResponse from "./dashboardSections/incidence"
import dashBoardstyles from "./dashboard.module.css"
import { useState } from 'react';
import DashBoardMenu from "./dashBoardMenu"
import Incidence from "./dashboardSections/incidence"
import Anomaly from "./dashboardSections/anomaly"
import RealTimeAlerts from "./dashboardSections/realTimeAlerts"
import ProfileManagement from "./dashboardSections/profileManagement"
import HelpANdSupport from "./dashboardSections/helpAndSupport/helpAndSupport"
import Settings from "./dashboardSections/settings/settings"
import Logout from "./dashboardSections/logout"
import blacksidebarStyles from "./blackSideBar.module.css"
import ThreatMonitoring from "./dashboardSections/threatMonitoring"






function DashboardNavModal({ onClose }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("modal")) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);
  return (
    <>
      <div className={styles.modal}>
        <div className={`${styles.modalContent} ${blacksidebarStyles.dashboardNavModalContainer}`}>
          <button onClick={onClose} className={`{styles.closeBtn} ${blacksidebarStyles.dashboardNavCloseBtn}`}>&#x2716;</button>
          {/* <ul className={`${styles.navUl} ${styles.modalNavUl}`}>
            <div className={styles.modalNavLi}>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="./incidence-response">incidence</Link></li>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="./about">About</Link></li>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="/resources">Resources</Link></li>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="/login">Login</Link></li>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="/signup">SignUp</Link></li>
            </div>
          </ul> */}
          {/* <ul className={blacksidebarStyles.blackSIdeBArContentContainer}>
            <div className={blacksidebarStyles.blackSIdeBArContent}>
              <li ><Link to="./"><DashBoardMenu menuIcon={(<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_935_414)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.24609V2.24609H5V5.24609H2ZM0.5 1.74609C0.5 1.48088 0.605357 1.22652 0.792893 1.03899C0.98043 0.851451 1.23478 0.746094 1.5 0.746094H5.5C5.76522 0.746094 6.01957 0.851451 6.20711 1.03899C6.39464 1.22652 6.5 1.48088 6.5 1.74609V5.74609C6.5 6.01131 6.39464 6.26566 6.20711 6.4532C6.01957 6.64074 5.76522 6.74609 5.5 6.74609H1.5C1.23478 6.74609 0.98043 6.64074 0.792893 6.4532C0.605357 6.26566 0.5 6.01131 0.5 5.74609V1.74609ZM8.5 1.99609C8.5 1.79718 8.57902 1.60642 8.71967 1.46576C8.86032 1.32511 9.05109 1.24609 9.25 1.24609H13.75C13.9489 1.24609 14.1397 1.32511 14.2803 1.46576C14.421 1.60642 14.5 1.79718 14.5 1.99609C14.5 2.19501 14.421 2.38577 14.2803 2.52642C14.1397 2.66708 13.9489 2.74609 13.75 2.74609H9.25C9.05109 2.74609 8.86032 2.66708 8.71967 2.52642C8.57902 2.38577 8.5 2.19501 8.5 1.99609ZM9.25 4.74609C9.05109 4.74609 8.86032 4.82511 8.71967 4.96576C8.57902 5.10642 8.5 5.29718 8.5 5.49609C8.5 5.69501 8.57902 5.88577 8.71967 6.02642C8.86032 6.16708 9.05109 6.24609 9.25 6.24609H13.75C13.9489 6.24609 14.1397 6.16708 14.2803 6.02642C14.421 5.88577 14.5 5.69501 14.5 5.49609C14.5 5.29718 14.421 5.10642 14.2803 4.96576C14.1397 4.82511 13.9489 4.74609 13.75 4.74609H9.25ZM2 10.2461V13.2461H5V10.2461H2ZM1.5 8.74609C1.23478 8.74609 0.98043 8.85145 0.792893 9.03899C0.605357 9.22652 0.5 9.48088 0.5 9.74609V13.7461C0.5 14.0113 0.605357 14.2657 0.792893 14.4532C0.98043 14.6407 1.23478 14.7461 1.5 14.7461H5.5C5.76522 14.7461 6.01957 14.6407 6.20711 14.4532C6.39464 14.2657 6.5 14.0113 6.5 13.7461V9.74609C6.5 9.48088 6.39464 9.22652 6.20711 9.03899C6.01957 8.85145 5.76522 8.74609 5.5 8.74609H1.5ZM9.25 9.24609C9.05109 9.24609 8.86032 9.32511 8.71967 9.46576C8.57902 9.60642 8.5 9.79718 8.5 9.99609C8.5 10.195 8.57902 10.3858 8.71967 10.5264C8.86032 10.6671 9.05109 10.7461 9.25 10.7461H13.75C13.9489 10.7461 14.1397 10.6671 14.2803 10.5264C14.421 10.3858 14.5 10.195 14.5 9.99609C14.5 9.79718 14.421 9.60642 14.2803 9.46576C14.1397 9.32511 13.9489 9.24609 13.75 9.24609H9.25ZM9.25 12.7461C9.05109 12.7461 8.86032 12.8251 8.71967 12.9658C8.57902 13.1064 8.5 13.2972 8.5 13.4961C8.5 13.695 8.57902 13.8858 8.71967 14.0264C8.86032 14.1671 9.05109 14.2461 9.25 14.2461H13.75C13.9489 14.2461 14.1397 14.1671 14.2803 14.0264C14.421 13.8858 14.5 13.695 14.5 13.4961C14.5 13.2972 14.421 13.1064 14.2803 12.9658C14.1397 12.8251 13.9489 12.7461 13.75 12.7461H9.25Z" fill="white"/></g><defs><clipPath id="clip0_935_414"><rect width="14" height="14" fill="white" transform="translate(0.5 0.746094)"/></clipPath></defs></svg>)} menuTitle="Overview"/></Link></li>
                        
                        <li  ><Link to="./incidence-response"><DashBoardMenu menuIcon={(<svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.376 11.746a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-8a1.5 1.5 0 0 0-1.5 1.5v8Zm1.5 3a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8Zm5-4.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25-5.75a.75.75 0 1 0-1.5 0v3a.75.75 0 1 0 1.5 0v-3Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.876 .746)" d="M0 0h14v14H0z"/></clipPath></defs></svg>)} menuTitle="Incidence Response"/></Link></li>

                        <li><Link to="./threat-monitoring"><DashBoardMenu menuIcon={(<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49992 4.74642V4.07975C5.49992 2.07975 6.83325 1.41309 8.16659 1.41309C9.49992 1.41309 10.8333 2.07975 10.8333 4.07975V6.07975C10.8333 6.74642 10.8333 8.07975 12.1666 8.07975C13.4999 8.07975 13.4999 6.74642 13.4999 6.07975C13.4999 4.74642 14.1666 4.74642 14.8333 4.74642M7.49992 9.41309L3.49992 13.4131M3.49992 9.41309L7.49992 13.4131M3.49992 7.41309V4.74642H7.49992V7.41309M5.49992 16.0798C6.7376 16.0798 7.92458 15.5881 8.79975 14.7129C9.67492 13.8377 10.1666 12.6508 10.1666 11.4131C10.1666 10.1754 9.67492 8.98842 8.79975 8.11325C7.92458 7.23808 6.7376 6.74642 5.49992 6.74642C4.26224 6.74642 3.07526 7.23808 2.20009 8.11325C1.32492 8.98842 0.833252 10.1754 0.833252 11.4131C0.833252 12.6508 1.32492 13.8377 2.20009 14.7129C3.07526 15.5881 4.26224 16.0798 5.49992 16.0798Z" stroke="white"/></svg>)} menuTitle="Threat Monitoring"/></Link></li>
                        
                        <li><Link to="./anomaly-detection"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_935_262)"><path d="M14.5908 1.88895H3.16218C2.85907 1.88895 2.56838 2.00936 2.35406 2.22369C2.13973 2.43801 2.01932 2.7287 2.01932 3.03181V5.88895C2.01932 6.0405 1.95912 6.18585 1.85195 6.29301C1.74479 6.40018 1.59945 6.46038 1.44789 6.46038C1.29634 6.46038 1.151 6.40018 1.04383 6.29301C0.936669 6.18585 0.876465 6.0405 0.876465 5.88895V3.03181C0.876465 2.4256 1.11728 1.84422 1.54594 1.41556C1.97459 0.986909 2.55597 0.746094 3.16218 0.746094L14.5908 0.746094C15.197 0.746094 15.7783 0.986909 16.207 1.41556C16.6356 1.84422 16.8765 2.4256 16.8765 3.03181V5.88895C16.8765 6.0405 16.8163 6.18585 16.7091 6.29301C16.6019 6.40018 16.4566 6.46038 16.305 6.46038C16.1535 6.46038 16.0081 6.40018 15.901 6.29301C15.7938 6.18585 15.7336 6.0405 15.7336 5.88895V3.03181C15.7336 2.7287 15.6132 2.43801 15.3989 2.22369C15.1845 2.00936 14.8939 1.88895 14.5908 1.88895ZM1.44789 11.0318C1.59945 11.0318 1.74479 11.092 1.85195 11.1992C1.95912 11.3063 2.01932 11.4517 2.01932 11.6032V14.4604C2.01932 14.7635 2.13973 15.0542 2.35406 15.2685C2.56838 15.4828 2.85907 15.6032 3.16218 15.6032H14.5908C14.8939 15.6032 15.1845 15.4828 15.3989 15.2685C15.6132 15.0542 15.7336 14.7635 15.7336 14.4604V11.6032C15.7336 11.4517 15.7938 11.3063 15.901 11.1992C16.0081 11.092 16.1535 11.0318 16.305 11.0318C16.4566 11.0318 16.6019 11.092 16.7091 11.1992C16.8163 11.3063 16.8765 11.4517 16.8765 11.6032V14.4604C16.8765 15.0666 16.6356 15.648 16.207 16.0766C15.7783 16.5053 15.197 16.7461 14.5908 16.7461H3.16218C2.55597 16.7461 1.97459 16.5053 1.54594 16.0766C1.11728 15.648 0.876465 15.0666 0.876465 14.4604V11.6032C0.876465 11.4517 0.936669 11.3063 1.04383 11.1992C1.151 11.092 1.29634 11.0318 1.44789 11.0318Z" fill="white"/><path d="M11.713 5.28081C11.6798 5.16024 11.6079 5.05391 11.5084 4.97814C11.4089 4.90236 11.2873 4.86133 11.1622 4.86133C11.0371 4.86133 10.9155 4.90236 10.816 4.97814C10.7165 5.05391 10.6446 5.16024 10.6113 5.28081L9.29018 10.5814L8.24447 8.48996C8.19696 8.39516 8.12402 8.31545 8.0338 8.25974C7.94358 8.20404 7.83964 8.17453 7.73361 8.17453H1.44789C1.29634 8.17453 1.151 8.23473 1.04383 8.34189C0.936669 8.44906 0.876465 8.5944 0.876465 8.74596C0.876465 8.89751 0.936669 9.04285 1.04383 9.15002C1.151 9.25718 1.29634 9.31738 1.44789 9.31738H7.38047L8.93704 12.4305C8.98871 12.5342 9.07067 12.6197 9.17205 12.6757C9.27342 12.7318 9.38943 12.7557 9.5047 12.7442C9.61997 12.7328 9.72905 12.6867 9.81748 12.6119C9.90592 12.5371 9.96953 12.4372 9.99989 12.3254L11.1622 7.6031L12.3256 12.3254C12.356 12.4372 12.4196 12.5371 12.508 12.6119C12.5965 12.6867 12.7055 12.7328 12.8208 12.7442C12.9361 12.7557 13.0521 12.7318 13.1535 12.6757C13.2548 12.6197 13.3368 12.5342 13.3885 12.4305L14.9428 9.31738H16.305C16.4566 9.31738 16.6019 9.25718 16.7091 9.15002C16.8163 9.04285 16.8765 8.89751 16.8765 8.74596C16.8765 8.5944 16.8163 8.44906 16.7091 8.34189C16.6019 8.23473 16.4566 8.17453 16.305 8.17453H14.5908C14.4847 8.17453 14.3808 8.20404 14.2906 8.25974C14.2003 8.31545 14.1274 8.39516 14.0799 8.48996L13.0342 10.5814L11.713 5.28081Z" fill="white"/></g><defs><clipPath id="clip0_935_262"><rect width="16" height="16" fill="white" transform="translate(0.876465 0.746094)"/></clipPath></defs></svg>)} menuTitle="Anomaly Detection"/></Link></li>
                        
                        <li><Link to="./real-time-alerts"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_935_268)"><path d="M8.87646 6.24609V10.2461M8.87646 12.2461V13.2461M8.87646 2.24609L15.8765 15.2461H1.87646L8.87646 2.24609Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_935_268"><rect width="16" height="16" fill="white" transform="translate(0.876465 0.746094)"/></clipPath></defs></svg>)} menuTitle="Real Time Alerts"/></Link></li>
                        
                        <li><Link to="./subscription"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1513_7408)"><path d="M13.4401 6.07983H2.77344V4.7465H13.4401V6.07983ZM12.1068 2.07983H4.10677V3.41317H12.1068V2.07983ZM6.98144 14.8132L4.78144 12.6132L5.71477 11.6798L6.98144 12.9465L10.5148 9.41317L11.4481 10.3465L6.98144 14.8132Z" fill="white"/><path d="M14.7721 7.41333H1.4388C1.08518 7.41333 0.746042 7.55381 0.495993 7.80385C0.245945 8.0539 0.105469 8.39304 0.105469 8.74666L0.105469 15.4133C0.105469 15.767 0.245945 16.1061 0.495993 16.3561C0.746042 16.6062 1.08518 16.7467 1.4388 16.7467H14.7721C15.1258 16.7467 15.4649 16.6062 15.7149 16.3561C15.965 16.1061 16.1055 15.767 16.1055 15.4133V8.74666C16.1055 8.39304 15.965 8.0539 15.7149 7.80385C15.4649 7.55381 15.1258 7.41333 14.7721 7.41333ZM14.7721 15.4133H1.4388V8.74666H14.7721V15.4133Z" fill="white"/></g><defs><clipPath id="clip0_1513_7408"><rect width="16" height="16" fill="white" transform="translate(0.105469 0.746582)"/></clipPath></defs></svg>)} menuTitle="Billing & Subscription"/></Link></li>

                        
                        <li><Link to="./profile-management"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.54321 12.7458C3.54321 12.0385 3.82416 11.3602 4.32426 10.8602C4.82436 10.3601 5.50264 10.0791 6.20988 10.0791H11.5432C12.2505 10.0791 12.9287 10.3601 13.4288 10.8602C13.9289 11.3602 14.2099 12.0385 14.2099 12.7458C14.2099 13.0994 14.0694 13.4385 13.8194 13.6886C13.5693 13.9386 13.2302 14.0791 12.8765 14.0791H4.87655C4.52292 14.0791 4.18379 13.9386 3.93374 13.6886C3.68369 13.4385 3.54321 13.0994 3.54321 12.7458Z" stroke="white" stroke-linejoin="round"/><path d="M8.87646 7.4126C9.98103 7.4126 10.8765 6.51717 10.8765 5.4126C10.8765 4.30803 9.98103 3.4126 8.87646 3.4126C7.7719 3.4126 6.87646 4.30803 6.87646 5.4126C6.87646 6.51717 7.7719 7.4126 8.87646 7.4126Z" stroke="white"/></svg>)} menuTitle="Profile Management"/></Link></li>
            
                        <li><Link to="help-support"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.87649 14.8414C12.2428 14.8414 14.9717 12.1124 14.9717 8.74612C14.9717 5.37981 12.2428 2.65088 8.87649 2.65088C5.51018 2.65088 2.78125 5.37981 2.78125 8.74612C2.78125 12.1124 5.51018 14.8414 8.87649 14.8414Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.87648 11.794C10.5596 11.794 11.9241 10.4295 11.9241 8.74635C11.9241 7.0632 10.5596 5.69873 8.87648 5.69873C7.19332 5.69873 5.82886 7.0632 5.82886 8.74635C5.82886 10.4295 7.19332 11.794 8.87648 11.794Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.1622 6.46043L13.067 4.55566M11.1622 11.0319L13.067 12.9366M6.5908 11.0319L4.68604 12.9366M6.5908 6.46043L4.68604 4.55566" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>)} menuTitle="Help and Support"/></Link></li>
                        
                        <li><Link to="./settings"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3763 9.1263V8.3613L15.3363 7.5213C15.5133 7.36532 15.6294 7.15181 15.6642 6.9185C15.699 6.68518 15.6501 6.44709 15.5263 6.2463L14.3463 4.2463C14.2587 4.09443 14.1326 3.96829 13.9808 3.88053C13.8289 3.79277 13.6567 3.74648 13.4813 3.7463C13.3727 3.74546 13.2646 3.76235 13.1613 3.7963L11.9463 4.2063C11.7366 4.0669 11.5178 3.94162 11.2913 3.8313L11.0363 2.5713C10.9906 2.3411 10.8654 2.13432 10.6826 1.98715C10.4998 1.83998 10.271 1.7618 10.0363 1.7663H7.69635C7.4617 1.7618 7.23294 1.83998 7.05012 1.98715C6.8673 2.13432 6.74207 2.3411 6.69635 2.5713L6.44135 3.8313C6.21331 3.9416 5.99283 4.06687 5.78135 4.2063L4.59135 3.7763C4.487 3.74911 4.37893 3.73898 4.27135 3.7463C4.09598 3.74648 3.92375 3.79277 3.77193 3.88053C3.6201 3.96829 3.49403 4.09443 3.40635 4.2463L2.22635 6.2463C2.10964 6.44679 2.06627 6.68163 2.10367 6.91058C2.14107 7.13953 2.25691 7.34836 2.43135 7.5013L3.37635 8.3663V9.1313L2.43135 9.9713C2.25198 10.1253 2.13297 10.3379 2.09545 10.5713C2.05792 10.8047 2.10429 11.0438 2.22635 11.2463L3.40635 13.2463C3.49403 13.3982 3.6201 13.5243 3.77193 13.6121C3.92375 13.6998 4.09598 13.7461 4.27135 13.7463C4.38002 13.7471 4.48811 13.7302 4.59135 13.6963L5.80635 13.2863C6.01612 13.4257 6.23493 13.551 6.46135 13.6613L6.71635 14.9213C6.76207 15.1515 6.8873 15.3583 7.07012 15.5054C7.25294 15.6526 7.4817 15.7308 7.71635 15.7263H10.0763C10.311 15.7308 10.5398 15.6526 10.7226 15.5054C10.9054 15.3583 11.0306 15.1515 11.0763 14.9213L11.3313 13.6613C11.5594 13.551 11.7799 13.4257 11.9913 13.2863L13.2013 13.6963C13.3046 13.7302 13.4127 13.7471 13.5213 13.7463C13.6967 13.7461 13.8689 13.6998 14.0208 13.6121C14.1726 13.5243 14.2987 13.3982 14.3863 13.2463L15.5263 11.2463C15.6431 11.0458 15.6864 10.811 15.649 10.582C15.6116 10.3531 15.4958 10.1442 15.3213 9.9913L14.3763 9.1263ZM13.4813 12.7463L11.7663 12.1663C11.3649 12.5064 10.906 12.7722 10.4113 12.9513L10.0563 14.7463H7.69635L7.34135 12.9713C6.85056 12.7871 6.39421 12.5217 5.99135 12.1863L4.27135 12.7463L3.09135 10.7463L4.45135 9.5463C4.3589 9.02873 4.3589 8.49887 4.45135 7.9813L3.09135 6.7463L4.27135 4.7463L5.98635 5.3263C6.38781 4.98624 6.84665 4.72042 7.34135 4.5413L7.69635 2.7463H10.0563L10.4113 4.5213C10.9021 4.70551 11.3585 4.97087 11.7613 5.3063L13.4813 4.7463L14.6613 6.7463L13.3013 7.9463C13.3938 8.46387 13.3938 8.99373 13.3013 9.5113L14.6613 10.7463L13.4813 12.7463Z" fill="white"/><path d="M8.87647 11.7461C8.28312 11.7461 7.7031 11.5701 7.20976 11.2405C6.71641 10.9109 6.33189 10.4423 6.10483 9.89415C5.87776 9.34597 5.81835 8.74277 5.93411 8.16082C6.04987 7.57888 6.33559 7.04433 6.75515 6.62477C7.1747 6.20522 7.70925 5.91949 8.2912 5.80374C8.87314 5.68798 9.47634 5.74739 10.0245 5.97446C10.5727 6.20152 11.0412 6.58604 11.3709 7.07938C11.7005 7.57273 11.8765 8.15275 11.8765 8.74609C11.8805 9.14118 11.8056 9.53309 11.6563 9.89887C11.5069 10.2647 11.2861 10.597 11.0067 10.8764C10.7273 11.1557 10.395 11.3766 10.0292 11.5259C9.66346 11.6752 9.27155 11.7501 8.87647 11.7461ZM8.87647 6.74609C8.61214 6.73994 8.34931 6.78746 8.10387 6.88579C7.85844 6.98412 7.6355 7.13121 7.44854 7.31817C7.26158 7.50513 7.11449 7.72807 7.01616 7.9735C6.91783 8.21894 6.87031 8.48177 6.87647 8.74609C6.87031 9.01042 6.91783 9.27325 7.01616 9.51869C7.11449 9.76412 7.26158 9.98706 7.44854 10.174C7.6355 10.361 7.85844 10.5081 8.10387 10.6064C8.34931 10.7047 8.61214 10.7523 8.87647 10.7461C9.14079 10.7523 9.40362 10.7047 9.64906 10.6064C9.89449 10.5081 10.1174 10.361 10.3044 10.174C10.4913 9.98706 10.6384 9.76412 10.7368 9.51869C10.8351 9.27325 10.8826 9.01042 10.8765 8.74609C10.8826 8.48177 10.8351 8.21894 10.7368 7.9735C10.6384 7.72807 10.4913 7.50513 10.3044 7.31817C10.1174 7.13121 9.89449 6.98412 9.64906 6.88579C9.40362 6.78746 9.14079 6.73994 8.87647 6.74609Z" fill="white"/></svg>)} menuTitle="Settings"/></Link></li>
                        
                        <li><Link to="./logout"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.2098 14.7461C3.84313 14.7461 3.52935 14.6157 3.26846 14.3548C3.00758 14.0939 2.87691 13.7799 2.87646 13.4128V4.07943C2.87646 3.71276 3.00713 3.39898 3.26846 3.13809C3.5298 2.8772 3.84358 2.74654 4.2098 2.74609H8.87646V4.07943H4.2098V13.4128H8.87646V14.7461H4.2098ZM11.5431 12.0794L10.6265 11.1128L12.3265 9.41276H6.87646V8.07943H12.3265L10.6265 6.37943L11.5431 5.41276L14.8765 8.74609L11.5431 12.0794Z" fill="white"/></svg>)} menuTitle="Logout"/></Link></li>

            </div> */}

            {/* <div className={blacksidebarStyles.blackSIdeBArContent}>
            <li><Link to="help-support"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.87649 14.8414C12.2428 14.8414 14.9717 12.1124 14.9717 8.74612C14.9717 5.37981 12.2428 2.65088 8.87649 2.65088C5.51018 2.65088 2.78125 5.37981 2.78125 8.74612C2.78125 12.1124 5.51018 14.8414 8.87649 14.8414Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.87648 11.794C10.5596 11.794 11.9241 10.4295 11.9241 8.74635C11.9241 7.0632 10.5596 5.69873 8.87648 5.69873C7.19332 5.69873 5.82886 7.0632 5.82886 8.74635C5.82886 10.4295 7.19332 11.794 8.87648 11.794Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.1622 6.46043L13.067 4.55566M11.1622 11.0319L13.067 12.9366M6.5908 11.0319L4.68604 12.9366M6.5908 6.46043L4.68604 4.55566" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>)} menuTitle="Help and Support"/></Link></li>
                        
                        <li><Link to="./settings"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3763 9.1263V8.3613L15.3363 7.5213C15.5133 7.36532 15.6294 7.15181 15.6642 6.9185C15.699 6.68518 15.6501 6.44709 15.5263 6.2463L14.3463 4.2463C14.2587 4.09443 14.1326 3.96829 13.9808 3.88053C13.8289 3.79277 13.6567 3.74648 13.4813 3.7463C13.3727 3.74546 13.2646 3.76235 13.1613 3.7963L11.9463 4.2063C11.7366 4.0669 11.5178 3.94162 11.2913 3.8313L11.0363 2.5713C10.9906 2.3411 10.8654 2.13432 10.6826 1.98715C10.4998 1.83998 10.271 1.7618 10.0363 1.7663H7.69635C7.4617 1.7618 7.23294 1.83998 7.05012 1.98715C6.8673 2.13432 6.74207 2.3411 6.69635 2.5713L6.44135 3.8313C6.21331 3.9416 5.99283 4.06687 5.78135 4.2063L4.59135 3.7763C4.487 3.74911 4.37893 3.73898 4.27135 3.7463C4.09598 3.74648 3.92375 3.79277 3.77193 3.88053C3.6201 3.96829 3.49403 4.09443 3.40635 4.2463L2.22635 6.2463C2.10964 6.44679 2.06627 6.68163 2.10367 6.91058C2.14107 7.13953 2.25691 7.34836 2.43135 7.5013L3.37635 8.3663V9.1313L2.43135 9.9713C2.25198 10.1253 2.13297 10.3379 2.09545 10.5713C2.05792 10.8047 2.10429 11.0438 2.22635 11.2463L3.40635 13.2463C3.49403 13.3982 3.6201 13.5243 3.77193 13.6121C3.92375 13.6998 4.09598 13.7461 4.27135 13.7463C4.38002 13.7471 4.48811 13.7302 4.59135 13.6963L5.80635 13.2863C6.01612 13.4257 6.23493 13.551 6.46135 13.6613L6.71635 14.9213C6.76207 15.1515 6.8873 15.3583 7.07012 15.5054C7.25294 15.6526 7.4817 15.7308 7.71635 15.7263H10.0763C10.311 15.7308 10.5398 15.6526 10.7226 15.5054C10.9054 15.3583 11.0306 15.1515 11.0763 14.9213L11.3313 13.6613C11.5594 13.551 11.7799 13.4257 11.9913 13.2863L13.2013 13.6963C13.3046 13.7302 13.4127 13.7471 13.5213 13.7463C13.6967 13.7461 13.8689 13.6998 14.0208 13.6121C14.1726 13.5243 14.2987 13.3982 14.3863 13.2463L15.5263 11.2463C15.6431 11.0458 15.6864 10.811 15.649 10.582C15.6116 10.3531 15.4958 10.1442 15.3213 9.9913L14.3763 9.1263ZM13.4813 12.7463L11.7663 12.1663C11.3649 12.5064 10.906 12.7722 10.4113 12.9513L10.0563 14.7463H7.69635L7.34135 12.9713C6.85056 12.7871 6.39421 12.5217 5.99135 12.1863L4.27135 12.7463L3.09135 10.7463L4.45135 9.5463C4.3589 9.02873 4.3589 8.49887 4.45135 7.9813L3.09135 6.7463L4.27135 4.7463L5.98635 5.3263C6.38781 4.98624 6.84665 4.72042 7.34135 4.5413L7.69635 2.7463H10.0563L10.4113 4.5213C10.9021 4.70551 11.3585 4.97087 11.7613 5.3063L13.4813 4.7463L14.6613 6.7463L13.3013 7.9463C13.3938 8.46387 13.3938 8.99373 13.3013 9.5113L14.6613 10.7463L13.4813 12.7463Z" fill="white"/><path d="M8.87647 11.7461C8.28312 11.7461 7.7031 11.5701 7.20976 11.2405C6.71641 10.9109 6.33189 10.4423 6.10483 9.89415C5.87776 9.34597 5.81835 8.74277 5.93411 8.16082C6.04987 7.57888 6.33559 7.04433 6.75515 6.62477C7.1747 6.20522 7.70925 5.91949 8.2912 5.80374C8.87314 5.68798 9.47634 5.74739 10.0245 5.97446C10.5727 6.20152 11.0412 6.58604 11.3709 7.07938C11.7005 7.57273 11.8765 8.15275 11.8765 8.74609C11.8805 9.14118 11.8056 9.53309 11.6563 9.89887C11.5069 10.2647 11.2861 10.597 11.0067 10.8764C10.7273 11.1557 10.395 11.3766 10.0292 11.5259C9.66346 11.6752 9.27155 11.7501 8.87647 11.7461ZM8.87647 6.74609C8.61214 6.73994 8.34931 6.78746 8.10387 6.88579C7.85844 6.98412 7.6355 7.13121 7.44854 7.31817C7.26158 7.50513 7.11449 7.72807 7.01616 7.9735C6.91783 8.21894 6.87031 8.48177 6.87647 8.74609C6.87031 9.01042 6.91783 9.27325 7.01616 9.51869C7.11449 9.76412 7.26158 9.98706 7.44854 10.174C7.6355 10.361 7.85844 10.5081 8.10387 10.6064C8.34931 10.7047 8.61214 10.7523 8.87647 10.7461C9.14079 10.7523 9.40362 10.7047 9.64906 10.6064C9.89449 10.5081 10.1174 10.361 10.3044 10.174C10.4913 9.98706 10.6384 9.76412 10.7368 9.51869C10.8351 9.27325 10.8826 9.01042 10.8765 8.74609C10.8826 8.48177 10.8351 8.21894 10.7368 7.9735C10.6384 7.72807 10.4913 7.50513 10.3044 7.31817C10.1174 7.13121 9.89449 6.98412 9.64906 6.88579C9.40362 6.78746 9.14079 6.73994 8.87647 6.74609Z" fill="white"/></svg>)} menuTitle="Settings"/></Link></li>
                        
                        <li><Link to="./logout"><DashBoardMenu menuIcon={(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.2098 14.7461C3.84313 14.7461 3.52935 14.6157 3.26846 14.3548C3.00758 14.0939 2.87691 13.7799 2.87646 13.4128V4.07943C2.87646 3.71276 3.00713 3.39898 3.26846 3.13809C3.5298 2.8772 3.84358 2.74654 4.2098 2.74609H8.87646V4.07943H4.2098V13.4128H8.87646V14.7461H4.2098ZM11.5431 12.0794L10.6265 11.1128L12.3265 9.41276H6.87646V8.07943H12.3265L10.6265 6.37943L11.5431 5.41276L14.8765 8.74609L11.5431 12.0794Z" fill="white"/></svg>)} menuTitle="Logout"/></Link></li>
              
            </div> */}
          {/* </ul> */}
          
          
        </div>
    </div>
    
    </>
  );
}

export default DashboardNavModal;

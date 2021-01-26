import React, { useState ,useEffect } from "react";
import './DashboardE.scss' ; 
import {Redirect} from "react-router-dom" ;
import {Link} from 'react-router-dom'
import {useDispatch , useSelector } from "react-redux";
import {getProfile , logout} from '../../JS/actions/authActions'
export default function DashboardE() {
  const isLoading = useSelector (state => state.userReducer.isLoading)
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const token = useSelector((state) => state.userReducer.token);
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getProfile(token));
}, [token, dispatch]);
  if(isLoading) return <h1>please wait...</h1>;
  if(!isAuth) return <Redirect to = "/login"/>;
    return (
        <div >
               <div className="hide"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><symbol viewBox="-167.4 267.7 257.7 257.7" id="facebook"><path d="M76.1 267.7h-229.3c-7.9 0-14.2 6.4-14.2 14.2v229.3c0 7.9 6.4 14.2 14.2 14.2h123.4v-99.8h-33.6v-38.9h33.6V358c0-33.3 20.3-51.4 50-51.4 14.2 0 26.5 1.1 30 1.5v34.8H29.6c-16.1 0-19.3 7.7-19.3 18.9v24.8h38.5l-5 38.9H10.4v99.8h65.7c7.9 0 14.2-6.4 14.2-14.2V281.9c0-7.8-6.4-14.2-14.2-14.2z" /></symbol><symbol viewBox="-211.1 354.7 82.6 84.9" id="googleplus"><path d="M-167.5 403.2l-4-3.1c-1.2-1-2.9-2.3-2.9-4.8 0-2.4 1.7-4 3.1-5.4 4.6-3.7 9.3-7.5 9.3-15.7 0-8.4-5.3-12.9-7.8-15h6.8l7.2-4.5h-21.8c-6 0-14.6 1.4-20.9 6.6-4.8 4.1-7.1 9.8-7.1 14.8 0 8.6 6.6 17.4 18.3 17.4 1.1 0 2.3-.1 3.5-.2-.5 1.3-1.1 2.4-1.1 4.3 0 3.4 1.8 5.5 3.3 7.5-5 .3-14.3.9-21.1 5.1-6.5 3.9-8.5 9.5-8.5 13.5 0 8.2 7.7 15.8 23.8 15.8 19 0 29.1-10.5 29.1-20.9.1-7.5-4.4-11.3-9.2-15.4zm-14.5-12.7c-9.5 0-13.8-12.3-13.8-19.7 0-2.9.5-5.9 2.4-8.2 1.8-2.2 4.9-3.7 7.7-3.7 9.2 0 13.9 12.4 13.9 20.4 0 2-.2 5.5-2.8 8.1-1.7 1.7-4.6 3.1-7.4 3.1zm.1 44.5c-11.8 0-19.5-5.7-19.5-13.5 0-7.9 7.1-10.5 9.5-11.4 4.6-1.6 10.6-1.8 11.6-1.8 1.1 0 1.7 0 2.5.1 8.4 6 12.1 9 12.1 14.6.1 6.9-5.6 12-16.2 12zm42.3-44.7v-11.1h-5.5v11.1h-11v5.5h11V407h5.5v-11.2h11.1v-5.5" /></symbol><symbol viewBox="62.4 152.4 487.2 487.2" id="instagram"><path d="M493.4 358.5H451c3.1 12 4.9 24.5 4.9 37.5 0 82.8-67.1 149.9-149.9 149.9S156.1 478.8 156.1 396c0-13 1.8-25.5 4.9-37.5h-42.4v206.1c0 10.3 8.4 18.7 18.7 18.7h337.3c10.3 0 18.8-8.4 18.8-18.7V358.5zm0-131.2c0-10.3-8.4-18.7-18.8-18.7h-56.2c-10.3 0-18.7 8.4-18.7 18.7v56.2c0 10.3 8.4 18.7 18.7 18.7h56.2c10.3 0 18.8-8.4 18.8-18.7v-56.2zm-187.4 75c-51.7 0-93.7 41.9-93.7 93.7 0 51.7 41.9 93.7 93.7 93.7 51.7 0 93.7-42 93.7-93.7 0-51.8-42-93.7-93.7-93.7m187.4 337.3H118.6c-31 0-56.2-25.2-56.2-56.2V208.6c0-31 25.2-56.2 56.2-56.2h374.8c31 0 56.2 25.2 56.2 56.2v374.7c0 31.1-25.2 56.3-56.2 56.3" /></symbol><symbol viewBox="-313 288.4 36.1 37.3" id="paper-airplane"><path d="M-312.1 309l8.8 4.6 1.8 10.7c.1.7.7 1.2 1.3 1.3h.3c.6 0 1.1-.3 1.4-.7l4.6-7.5 9.7 4.8c.2.1.5.2.7.2s.5-.1.7-.2c.5-.2.8-.7.9-1.2l4.8-30c.2-.9-.3-1.9-1.2-2.3-.7-.4-1.6-.4-2.2 0l-31.9 17.4c-.5.3-.8.8-.8 1.5.2.6.5 1.2 1.1 1.4zm27.4 9.3l-7.4-3.6 10.8-17.4-3.4 21zm-11.2-3.9l-3.1 5-1.1-6.3 12.9-12.8-8.7 14.1zm7.8-17.7l-14.1 13.8-5.8-3 19.9-10.8z" /></symbol><symbol viewBox="-326.8 274.8 63.7 64.5" id="person"><path d="M-282.1 306.7l-2.5-1.1 1.8-2.1c2.6-3.1 4.1-6.9 4.1-10.9v-1.2c0-9.2-7.5-16.8-16.8-16.8h-1.2c-9.2 0-16.8 7.6-16.8 16.8v1.2c0 4.2 1.6 8.3 4.6 11.5l1.9 2-2.5 1.2c-10.7 5.1-17.6 16.1-17.6 27.9 0 2.2 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1c0-12.5 10.2-22.8 22.8-22.8.2 0 .4 0 .6-.1l.3-.1.3.1c.3 0 .5.1.6.1 12.5 0 22.8 10.2 22.8 22.8 0 2.2 1.8 4.1 4.1 4.1 2.2 0 4.1-1.8 4.1-4.1.1-12.5-7.3-23.6-18.8-28.5zm-4.7-14.4v.4c0 4.7-3.9 8.6-8.6 8.7h-.8c-4.8 0-8.6-3.9-8.6-8.7v-1.2c0-2.3.9-4.5 2.5-6.1 1.6-1.6 3.8-2.5 6.1-2.5h1.2c4.8 0 8.6 3.9 8.6 8.7v.6l-.4.1z" /></symbol><symbol viewBox="-232.1 369.1 41.9 54.2" id="pinterest"><path d="M-209.8 369.1c-14.8 0-22.2 10.6-22.2 19.4 0 5.4 2 10.1 6.4 11.9.7.3 1.4 0 1.6-.8.1-.5.5-1.9.6-2.5.2-.8.1-1.1-.4-1.7-1.3-1.5-2.1-3.4-2.1-6.1 0-7.9 5.9-14.9 15.3-14.9 8.4 0 12.9 5.1 12.9 11.9 0 9-4 16.5-9.9 16.5-3.3 0-5.7-2.7-4.9-6 .9-3.9 2.7-8.2 2.7-11 0-2.5-1.4-4.7-4.2-4.7-3.3 0-6 3.4-6 8.1 0 2.9 1 4.9 1 4.9l-4 17c-1.2 5-.2 11.2-.1 11.8 0 .4.5.5.7.2.3-.4 4.3-5.3 5.6-10.2.4-1.4 2.2-8.6 2.2-8.6 1.1 2.1 4.2 3.9 7.6 3.9 10 0 16.8-9.1 16.8-21.3.1-9.2-7.8-17.8-19.6-17.8z" /></symbol><symbol viewBox="-323.2 278.2 56.3 57.6" id="share"><path d="M-276.9 315.6c-2.6 0-5 1-6.8 2.6l-19.3-9.9c.1-.5.1-1 .1-1.5v-.9l19.5-9.9c1.8 1.5 4 2.4 6.5 2.4 5.6 0 10.1-4.5 10.1-10.1s-4.5-10.1-10.1-10.1-10.1 4.5-10.1 10.1v.9l-19.5 9.9c-1.8-1.5-4-2.4-6.6-2.4-5.6 0-10.1 4.5-10.1 10.1s4.5 10.1 10.1 10.1c2.3 0 4.3-.7 6-2l20 10.2v.5c0 5.6 4.5 10.1 10.1 10.1s10.1-4.5 10.1-10.1c.1-5.5-4.5-10-10-10z" /></symbol><symbol viewBox="0 137.8 612 516.4" id="speech-bubble"><path d="M549.7 199.1v324.2h-63.4L415.6 594l-66.5-70.7H61.3V199.1h488.4m0-61.3H61.3C27 137.8 0 165.9 0 199.1v324.2c0 34.3 28.1 61.3 61.3 61.3h261.8l48.8 50.9c11.4 12.5 27 18.7 43.6 18.7h1c16.6 0 32.2-6.2 43.6-17.7l52-52h38.4c34.3 0 61.3-28.1 61.3-61.3V199.1c-.8-34.3-27.9-61.3-62.1-61.3z" /></symbol><symbol viewBox="9.7 189.1 592.5 413.7" id="twitter"><path d="M239.2 602.2C129 596.7 59.9 550.2 9.7 484.7c26.3 22.6 63.6 42.8 112.6 40.4s82.6-22.6 107.1-47.7c-17.1 2.4-33-4.3-39.8-14.1-9.8-15.9 5.5-30.6 19.6-36.1-36.1 1.8-59.4-13.5-72.2-36.7 8.6-10.4 22-15.9 39.8-16.5-32.4-9.2-60-24.5-65.5-60.6 11.6-1.8 21.4-4.9 34.9-4.3-23.9-15.3-50.8-34.9-49.6-75.3 36.1 13.5 72.8 28.2 106.5 44.7 34.3 16.5 67.3 33 91.2 60 21.4-56.9 45.9-113.8 93-144.4-.6 7.3-4.3 11.6-7.3 15.9 12.2-9.8 26.3-17.7 45.3-20.8-3.1 11-11.6 15.9-21.4 19.6 6.7-1.8 14.1-4.9 23.3-7.3 6.1-1.8 25.1-6.7 25.1 3.1 0 8.6-14.1 12.2-22 14.7-11.6 3.7-20.2 4.9-28.2 8.6 41.6-1.2 69.8 17.7 90.6 39.2 19 19.6 31.8 45.3 37.9 74.7 22 8 53.2 1.2 69.8-7.3-9.2 22.6-32.4 36.1-63.6 38.6 16.5 7.3 42.2 9.8 65.5 7.3.6 1.2-2.4 4.3-4.3 6.1-14.8 12.6-36.9 20.5-65 20.5-16.5 61.2-53.9 106.5-99.8 138.3-46.5 32.4-105.9 54.5-181.2 57.5-3.6-.6-8.5-.6-12.8-.6z" /></symbol><symbol viewBox="-324.7 285.2 59.4 43.7" id="video-player"><path d="M-271.2 285.2h-47.6c-3.3 0-5.9 2.7-5.9 5.9v31.8c0 3.3 2.7 5.9 5.9 5.9h47.6c3.3 0 5.9-2.7 5.9-5.9v-31.8c0-3.3-2.6-5.9-5.9-5.9zm0 37.7h-47.6v-31.8h47.6v31.8zM-304.2 319.3c.5.3 1 .4 1.5.4s1-.1 1.5-.4l16.8-9.7c.9-.5 1.5-1.5 1.5-2.6s-.6-2-1.5-2.6l-16.8-9.7c-.9-.5-2-.5-3 0-.9.5-1.5 1.5-1.5 2.6v19.5c.1 1 .6 2 1.5 2.5zm4.5-16.9l8 4.6-8 4.6v-9.2z" /></symbol></svg></div>
        <header className="main-head">
          <nav className="head-nav">
            <ul className="menu1">
              <li>
              <Link to ="/DashboardE/Femme">          
                  <svg className="person" onClick={() => dispatch(logout())}>
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#person" />
                  </svg><span > LOG OUT</span></Link>
                  
              </li>
              <li>
              <Link to ="/DashboardE/Femme">
                  <svg className="video-player">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#video-player" />
                  </svg><span> Ajouter Article pour  Femme</span></Link>
                  </li>
              <li>
              <Link to ="/DashboardE/Homme">
                <svg className="video-player">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#video-player" />
                  </svg><span> Ajouter Article pour Homme</span></Link>
              </li>

              <li>
              <Link to ="/DashboardE/Enfant">
                <svg className="video-player">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#video-player" />
                  </svg><span> Ajouter Article pour Enfant</span></Link>
              </li>
              <li>
              <Link to ="/DashboardE/all/tshirt">
              <svg className="speech-bubble">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#speech-bubble"></use>
              </svg><span>Afficher Tous les T-SHIRT</span></Link>
              </li>
              <li>
              <Link to ="/DashboardE/all/shoes">
              <svg className="speech-bubble">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#speech-bubble"></use>
              </svg><span>Afficher Tous les CHAUSSURES</span></Link>
              </li>
              <li>
              <Link to ="/DashboardE/all/jeans">
              <svg className="speech-bubble">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#speech-bubble"></use>
              </svg><span>Afficher Tous les JEANS</span></Link>
              </li>
      
              <li>
              <Link to ="/DashboardE/Femme">
              <svg className="speech-bubble">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#speech-bubble"></use>
              </svg><span>Guide des taille</span></Link>
          </li>

              <li>
              <Link to ="/DashboardE/Femme">
                  <svg className="paper-airplane">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#paper-airplane" />
                  </svg><span>Contactez-nous ?</span></Link>
              </li>
            </ul>
          </nav>
        </header> {/* //main-head */}
        <div className="wrap-all-the-things" />
     
      </div>
    )
}

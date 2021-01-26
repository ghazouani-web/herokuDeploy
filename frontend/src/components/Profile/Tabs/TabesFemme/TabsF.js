import React from 'react';
import '../../Tabs.scss'; 
import { Redirect} from "react-router-dom";
import JeansF from './JeansF'
import ChaussuresF from './ChaussuresF'
import TshirtF from './TshirtF'
import {useDispatch , useSelector } from "react-redux";
export default function TabsF() {
  const isLoading = useSelector (state => state.userReducer.isLoading)
  const user = useSelector((state) => state.userReducer.user);
  const token = useSelector((state) => state.userReducer.token);
  const isAuth = useSelector((state) => state.userReducer.isAuth)
   // if (!isAuth) return <Redirect to='/Home' />
  //  if (!isLoading) return <Redirect to='/load' />
    return (
        <div>
        <div className="tabbed">
        <input type="radio" name="tabs" id="tab-nav-1" defaultChecked />       
        <label htmlFor="tab-nav-1">T-shirt Femme</label>
        <input type="radio" name="tabs" id="tab-nav-2" />
        <label htmlFor="tab-nav-2">Jeans Femme</label>
        <input type="radio" name="tabs" id="tab-nav-3" />
        <label htmlFor="tab-nav-3">Chaussure Femme</label>
        <div className="tabs">
          <div>
           <TshirtF/>
       </div>
       <div>
          <JeansF/>
      </div>
      <div>
          <ChaussuresF/>
      </div>
        </div>
      </div>
        </div>
    )
}
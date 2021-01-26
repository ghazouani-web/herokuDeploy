import React from 'react';
import '../../Tabs.scss'; 
import JeansH from './JeansH'
import { Redirect} from "react-router-dom";
import ChaussureH from './ChaussureH'
import TshirtH from './TshirtH'
import {useDispatch , useSelector } from "react-redux";
export default function TabsH() {
  const isLoading = useSelector (state => state.userReducer.isLoading)
  const user = useSelector((state) => state.userReducer.user);
  const token = useSelector((state) => state.userReducer.token);
  const isAuth = useSelector((state) => state.userReducer.isAuth)
  //  if (!isAuth) return <Redirect to='/Home' />
    return (
        <div>
        <div className="tabbed">
        <input type="radio" name="tabs" id="tab-nav-1" defaultChecked />       
        <label htmlFor="tab-nav-1">T-shirt Homme</label>
        <input type="radio" name="tabs" id="tab-nav-2" />
        <label htmlFor="tab-nav-2">Jeans Homme</label>
        <input type="radio" name="tabs" id="tab-nav-3" />
        <label htmlFor="tab-nav-3">Chaussure Homme</label>
        <div className="tabs">
          <div>
           <TshirtH/>
       </div>
       <div>
          <JeansH/>
      </div>
      <div>
          <ChaussureH/>
      </div>
        </div>
      </div>
        </div>
    )
}
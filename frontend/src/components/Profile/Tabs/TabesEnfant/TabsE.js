import React from 'react';
import '../../Tabs.scss'; 
import { Redirect} from "react-router-dom";
import JeansE from './JeansE'
import ChaussureE from './ChaussureE'
import TshirtE from './TshirtE'
import {useDispatch , useSelector } from "react-redux";
export default function TabsE() {
  const isLoading = useSelector (state => state.userReducer.isLoading)
  const user = useSelector((state) => state.userReducer.user);
  const token = useSelector((state) => state.userReducer.token);
  const isAuth = useSelector((state) => state.userReducer.isAuth)
    //if (!isAuth) return <Redirect to='/Home' />
    return (
        <div>
        <div className="tabbed">
        <input type="radio" name="tabs" id="tab-nav-1" defaultChecked />       
        <label htmlFor="tab-nav-1">T-shirt Enfant</label>
        <input type="radio" name="tabs" id="tab-nav-2" />
        <label htmlFor="tab-nav-2">Jeans Enfant</label>
        <input type="radio" name="tabs" id="tab-nav-3" />
        <label htmlFor="tab-nav-3">Chaussure Enfant</label>
        <div className="tabs">
          <div>
           <TshirtE/>
       </div>
       <div>
          <JeansE/>
      </div>
      <div>
          <ChaussureE/>
      </div>
        </div>
      </div>
        </div>
    )
}
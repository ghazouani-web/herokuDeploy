import React from 'react';
import './More.scss';
import Product from './Product'
export default function more() {
    return (
      <div>        
 <div className="grid">
 <h2>HOMME</h2>
   <div className="all">
        <div className="block n1" />
        <div className="block n2" />
        <div className="block n3" />
        <div className="block n4" />
        <img className="bg i1" src="https://medias.fashionnetwork.com/image/upload/v1/medias/8e078069fbebbd105ac7453f1e85f1e61861149.jpg" alt="..." />
        <img className="bg i2" src="https://i0.wp.com/newfashiongeneration.com/wp-content/uploads/2019/05/tom.jpg" alt="..." />
        <img className="bg i3" src="https://www.unmec.fr/wp-content/uploads/2016/01/6f71cd5ae45927657ffb5f736d10d7bf.jpg" alt="..." />
        <img className="bg i4" src="https://www.casting.fr/assets/cache/casting_list/casting/a/2/e/xcasting_168651_5fd9da23b339a.jpeg.pagespeed.ic.5StMxDUfts.jpg" alt="..." />
      </div>

   </div> 
   <div className="grid2">
 <Product />
 </div>           

<div className="grid">
 <h2>FEMME</h2>
   <div className="all">
        <div className="block n1" />
        <div className="block n2" />
        <div className="block n3" />
        <div className="block n4" />
        <img className="bg i1" src="https://cdn.artphotolimited.com/images/5b7ea35556cc5409d2c31320/700x700/ballerina-in-a-hat-5.jpg" alt="..." />
        <img className="bg i2" src="https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/07/30/node_118179/37592292/public/2020/07/30/B9724150474Z.1_20200730131459_000%2BGTPGDO6NG.1-0.jpg?itok=K8PqNfua1596107797" alt="..." />
        <img className="bg i3" src="https://archzine.fr/wp-content/uploads/2017/12/photo-femme-noir-et-blanc-femme-avec-lunette-et-jumelle-photo-humouristique-resized.jpg" alt="..." />
        <img className="bg i4" src="https://i.pinimg.com/236x/b8/80/68/b88068cb952db5466b87bfba6a8a5d56.jpg" alt="..." />
      </div>
   </div>
</div>

       
    )
 }
 
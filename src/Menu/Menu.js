import React from 'react'
import CloseImg from './icons/close.png'
import menuImg from './icons/header_menu_hamburger.png'
import style from './Menu.module.css'
import Navigation from "../components/Navigation/Navigation";
import Backdrop from "../components/Backdrop/backdrop";


class Menu extends React.Component {
    state={
        isOpen:false,
    };

    toggleMenuHandler=()=>{
        this.setState({isOpen:!this.state.isOpen})
    };

    render() {
        let wrapCls=[style.Wrapper];
        let imgCls=[];
        let imgSrc=[];
        if(!this.state.isOpen){
            wrapCls.push(style.WrapClose);
            imgCls.push(style.imgMenu);
            imgSrc.push(menuImg)
        }else{
            wrapCls.push(style.WrapOpen);
            imgCls.push(style.imgClose);
            imgSrc.push(CloseImg)
        }

        return (
            <>
                <div className={wrapCls.join(' ')}>
                    <img className={imgCls.join(' ')} src={imgSrc} alt="" onClick={this.toggleMenuHandler}/>
                    <div>
                        <Navigation className={style.menuNav} activeClassName={style.headerActiveLink}/>
                    </div>
                </div>
                {this.state.isOpen && <Backdrop closeBackdrope={this.toggleMenuHandler}/>}
            </>
        )
    }
}


export default Menu
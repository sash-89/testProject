import React, {useRef, useState} from "react";
import style from "./Tabs.module.css";



const transitionStyle = `left 200ms, right 200ms`;

const Tabs = () => {
    const [counter, changeCounter]= useState(0)
    const [sizes, changeSizes]= useState(null)
    const ref = useRef(null);
    const tabs = [
        {
            tabName: 'Tab1',
            dataName: '0',
            tabContent: "Content1",
        },
        {
            tabName: 'Tab2',
            dataName: '1',
            tabContent: "Content2",
        },
        {
            tabName: 'Tab3',
            dataName: '2',
            tabContent: "Content3",
        }
    ];


  const ChangeTabs = ({target}) => {
      changeCounter(+target.getAttribute("data-name"))

      const rootBounds = ref.current.getBoundingClientRect();
      const bounds = target.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      changeSizes({left, right})

    };

   const getUnderlineStyle =()=>{
        if (!sizes) {
            return {left: '0', right: '200px'} /*right:100%*/
        }
        return {
            left: `${sizes.left}px`,
            right: `${sizes.right}px`,
            transition: transitionStyle,
        }
    };

        return (
            <div className={style.TabsContainer}>
            <div ref={ref} className={style.TabWrapper}>
                {tabs.map(({tabName, dataName})=>{
                    return(
                            <div key={tabName+tabName}
                                 className={tabs[counter].dataName===dataName? style.Tabs +" "+ style.activeTabs: style.Tabs}
                                 data-name={dataName}
                                 onClick={(e)=>{ChangeTabs(e)}}>{tabName}
                               </div>
                    )
                })}
                <div className={style.TabsUnderline}  style={getUnderlineStyle()}
                />
            </div>
                <div className={style.TabsBlock} >{tabs[counter].tabContent}</div>
            </div>
        )

};

export default Tabs;

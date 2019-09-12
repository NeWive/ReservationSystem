import React, {useState} from "react";
import ArrowRotate from "../element/ArrowRotate";
import { navigator_list } from "../statics/static_content";
import { TransitionGroup, Transition } from "react-transition-group";
import './ModuleList.scss';

function ModuleList(props) {
    const defaultStyle = {
        marginTop: -82,
        transition: `margin-top 300ms,opacity 300ms`,
        opacity: 0,
    };
    const defaultMenuStyle = {
        marginLeft: 0,
        transition: 'margin-left 300ms'
    };
    const defaultArrowStyle = {
        transform: `rotate(0deg)`,
        transition: `transform 300ms`
    };
    const arrowDownStyle = {
        entering: { transform: `rotate(0deg)` },
        entered:  { transform: `rotate(0deg)` },
        exiting:  { transform: `rotate(-90deg)` },
        exited:  { transform: `rotate(-90deg)` }
    };
    const menuStyle = {
        entering: { marginLeft: 0, },
        entered:  { marginLeft: 0, },
        exiting:  { marginLeft: -220, },
        exited:  { marginLeft: -220, }
    };
    const arrowRightStyle = {
        entering: { transform: `rotate(0deg)` },
        entered:  { transform: `rotate(0deg)` },
        exiting:  { transform: `rotate(-180deg)` },
        exited:  { transform: `rotate(-180deg)` }
    };
    const styles = {
        entering: { marginTop: 0, opacity: 1 },
        entered:  { marginTop: 0, opacity: 1 },
        exiting:  { marginTop: -82, opacity: 0 },
        exited:  { marginTop: -82, opacity: 0 }
    };
    const [extendMenuId, setExtendMenuId] = useState(-1);
    return (
        <Transition timeout={300}
                    in={props.isAdminMenuOpen}>
            {
                state => (
                    <div id="ModuleList" style={{
                        ...defaultMenuStyle,
                        ...menuStyle[state],
                    }}>
                        <TransitionGroup>
                            <div className="module_list_container">
                                {
                                    navigator_list.map((fItem, index) => (
                                        <>
                                            <div className="father_item" key={fItem.key} onClick={() => {
                                                if(fItem.type === 'menu') {
                                                    setExtendMenuId((extendMenuId === index ? -1 : index));
                                                    // funcMap[fItem.key](!valueMap[fItem.key]);
                                                }else {
                                                    props.setAdminModuleId(fItem.id)
                                                }
                                            }}>
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a >
                                                    {
                                                        fItem.name
                                                    }
                                                </a>
                                                {
                                                    fItem.type === 'menu' ? (
                                                        <Transition timeout={300}
                                                                    in={!(extendMenuId === index)}>
                                                            {
                                                                state => (
                                                                    <div className={`arrow_rotate_box`}
                                                                         style={{
                                                                             ...defaultArrowStyle,
                                                                             ...arrowDownStyle[state],
                                                                         }}>
                                                                        <ArrowRotate/>
                                                                    </div>
                                                                )
                                                            }
                                                        </Transition>
                                                    ) : (
                                                        <Transition timeout={300}
                                                                    in={!(props.adminModuleId === fItem.id)}>
                                                            {
                                                                state => (
                                                                    <div className={`arrow_rotate_box`}
                                                                         style={{
                                                                             ...defaultArrowStyle,
                                                                             ...arrowRightStyle[state],
                                                                         }}>
                                                                        <ArrowRotate/>
                                                                    </div>
                                                                )
                                                            }
                                                        </Transition>
                                                    )
                                                }
                                            </div>
                                            {
                                                fItem.type === 'menu' ? (
                                                    <Transition timeout={300} in={extendMenuId === index}>
                                                        {
                                                            state => (
                                                                <ul className={`fItem_${fItem.key}`}
                                                                    style={{
                                                                        ...defaultStyle,
                                                                        ...styles[state],
                                                                    }}>
                                                                    {
                                                                        fItem.children.map((cItem) => (
                                                                            <li key={cItem.key} className={'child_item'} onClick={() => {
                                                                                props.setAdminModuleId(cItem.id)
                                                                            }}>
                                                                                {
                                                                                    cItem.name
                                                                                }
                                                                                <Transition timeout={300}
                                                                                            in={!(props.adminModuleId === cItem.id)}>
                                                                                    {
                                                                                        state => (
                                                                                            <div className={`arrow_rotate_box`}
                                                                                                 style={{
                                                                                                     ...defaultArrowStyle,
                                                                                                     ...arrowRightStyle[state],
                                                                                                 }}>
                                                                                                <ArrowRotate/>
                                                                                            </div>
                                                                                        )
                                                                                    }
                                                                                </Transition>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            )
                                                        }
                                                    </Transition>
                                                ) : ''
                                            }
                                        </>
                                    ))
                                }
                            </div>
                        </TransitionGroup>
                    </div>
                )
            }
        </Transition>
    )
}

export default ModuleList;
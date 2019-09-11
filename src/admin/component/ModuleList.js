import React, {useState} from "react";
import { navigator_list } from "../statics/static_content";
import { TransitionGroup, Transition } from "react-transition-group";
import './ModuleList.scss';

function ModuleList(props) {
    const defaultStyle = {
        marginTop: -90,
        transition: `margin-top 300ms,opacity 300ms`,
        opacity: 0,
    };
    const styles = {
        entering: { marginTop: 0, opacity: 1 },
        entered:  { marginTop: 0, opacity: 1 },
        exiting:  { marginTop: -90, opacity: 0 },
        exited:  { marginTop: -90, opacity: 0 }
    };
    const [studentModule, setStudentModule] = useState(false);
    const [adminModule, setAdminModule] = useState(false);
    const [lockModule, setLockModule] = useState(false);
    const valueMap = {
        student_module: studentModule,
        admin_module: adminModule,
        lock_module: lockModule,
    };
    const funcMap = {
        student_module: setStudentModule,
        admin_module: setAdminModule,
        lock_module: setLockModule,
    };
    return (
        <div id="ModuleList">
            <TransitionGroup>
                <div className="module_list_container">
                    {
                        navigator_list.map((fItem, index) => (
                            <>
                                <div className="father_item" key={fItem.key}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a onClick={() => {
                                        if(fItem.type === 'menu') {
                                            funcMap[fItem.key](true);
                                        }else {

                                        }
                                    }}>
                                        {
                                            fItem.name
                                        }
                                    </a>
                                </div>
                                {
                                    fItem.type === 'menu' ? (
                                        <Transition timeout={300} in={valueMap[fItem.key]}>
                                            {
                                                state => (
                                                    <ul className={`fItem_${fItem.key}`}
                                                        style={{
                                                            ...defaultStyle,
                                                            ...styles[state],
                                                        }}>
                                                        {
                                                            fItem.children.map((cItem) => (
                                                                <li key={cItem.key} className={'child_item'}>
                                                                    {
                                                                        cItem.name
                                                                    }
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

export default ModuleList;
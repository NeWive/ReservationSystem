import React from "react";
import { module_tips } from "../statics/static_content";
import './ModuleTips.scss';

function ModuleTips(props) {
    return (
        <div id="ModuleTips">
            <div className="module_tips_container">
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    props.setAdminModuleId(-1);
                }}>
                    首页
                </a>
                {
                    module_tips[props.adminModuleId] ? module_tips[props.adminModuleId].map((item) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <>
                            {
                                typeof item === 'string' ? (
                                    <span>{
                                        ` /${item}`
                                    }</span>
                                ) : (
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <a href=""
                                       onClick={(e) => {
                                           e.preventDefault();
                                       }}>
                                        {
                                            ` /${item.name}`
                                        }
                                    </a>
                                )
                            }
                        </>
                    )) : ''
                }
            </div>
        </div>
    )
}

export default ModuleTips;
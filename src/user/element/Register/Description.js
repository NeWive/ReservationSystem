import React from 'react';
import { description } from "../../config/list.config";
import './Description.scss';

function Description() {
    return (
        <div id="Description">
            <div className="description_container">
                <div className="title">
                    <span>
                        众创空间简介
                    </span>
                </div>
                <div className="content">
                    <p>
                        {
                            description
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description;
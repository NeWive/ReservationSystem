import React from 'react';
import './Table.scss';
import ArrowRotate from "./ArrowRotate";

//
// thList：{ name, type, key }
function Table(props) {
    let length = props.thList.length;
    if(props.thList[0].type === 'checkbox') {
        length--;
    }
    const pageHandler = () => {
        let pageTotal = props.total / props.batchSize;
        let pageArr = [];
        for(let item = 0; item < pageTotal; item++) {
            pageArr.push(item);
        }
        console.log(pageArr);
        let before = props.currentBatch - 2;
        let after = props.currentBatch + 2;
        let leftDot = false;
        let rightDot = false;
        console.log(before);
        console.log(after);
        // eslint-disable-next-line array-callback-return
        return pageArr.map((page, index) => {
            if(index === 0 || index  === pageTotal - 1) {
                return (
                    <div className={`page_button ${index === props.currentBatch ? 'currentPage' : 'not'}`} key={index}>
                                                <span>
                                                    {
                                                        page + 1
                                                    }
                                                </span>
                    </div>
                )
            }else {
                if(index >= before && index <= after) {
                    return (
                        <div className={`page_button ${index === props.currentBatch ? 'currentPage' : 'not'}`} key={index}>
                                                    <span>
                                                        {
                                                            page + 1
                                                        }
                                                    </span>
                        </div>
                    )
                }else if((index < before && !leftDot) || (index > after && !rightDot)) {
                    if(index < before) {
                        leftDot = !leftDot;
                    }
                    if(index > after && !rightDot) {
                        rightDot = !rightDot;
                    }
                    return (
                        <span className={'dot'}>
                                                    ...
                                                </span>
                    );
                }
            }
        })
    };
    const batchSizeArr = [5, 10, 15, 20];
    return (
        <div id="ModuleTable">
            <div className="th_container">
                {
                    props.thList.map ? props.thList.map((item) => (
                        <div className="th_child"
                            style={{
                                width: `${item.type !== 'checkbox' ? 80/length : 3}%`
                            }}
                             key={item.key}>
                            {
                                item.type === 'checkbox' ? (
                                    <input type="checkbox" className={'select checkbox'} value={''}/>
                                ) : (item.name)
                            }
                        </div>
                    )) : ''
                }
            </div>
            {
                // eslint-disable-next-line array-callback-return
                props.tdList ? props.tdList.map((fItem, index) => {
                    if (index < props.batchSize) {
                        return (
                            <div className="td_sel" key={index}>
                                {
                                    props.thList.map((cItem, cIndex) => (
                                        <div className="td_child"
                                             key={`${cIndex}${fItem.key}`}
                                             style={{
                                                 width: `${cItem.type !== 'checkbox' ? 80/length : 3}%`
                                             }}>
                                    <span>
                                        {
                                            cItem.type === 'checkbox' ? (
                                                <input type="checkbox" className={'select_all checkbox'} value={''}/>
                                            ) : (props.contentHandler ? props.contentHandler(fItem, cItem) : fItem[cItem.key])
                                        }
                                    </span>
                                        </div>
                                    ))
                                }
                                {/*<div className="table_sel_cover"/>*/}
                            </div>
                        )
                    }
                }) : ''
            }
            <div className="td_sel page_module">
                <div className="td_child" style={{
                    width: `${props.thList[0].type !== 'checkbox' ? 80 : 83}%`
                }}>
                    <div className="left_arrow_box">
                        <ArrowRotate/>
                    </div>
                    <div className="page_box">
                        {
                            props.total > 0 ? pageHandler() : ''
                        }
                    </div>
                    <div className="right_arrow_box">
                        <ArrowRotate/>
                    </div>
                    <div className="jump_page_box">
                        <span>
                            到第
                        </span>
                        <input type="text"/>
                        <span>
                            页
                        </span>
                        <div className="jump_button" onClick={props.jumpPageHandler}>
                            确定
                        </div>
                    </div>
                    <div className="total_batch_box">
                        <span>
                            {
                                `共 ${props.total} 条, 当前在第 ${props.currentBatch + 1} 页`
                            }
                        </span>
                    </div>
                    <div className="set_batch_size_box">
                        <select>
                            {
                                batchSizeArr.map((item, index) => (
                                    <option value={item} selected={index === 1 ? 'selected' : ''}>
                                        {
                                            `${item} 条/页`
                                        }
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
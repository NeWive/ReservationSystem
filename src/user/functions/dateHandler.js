import React from 'react';
const mapDate = {
    '0': '日',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
};

const hour = 1000 * 60 * 60;
const day = 24 * 60 * 60 * 1000;

function getDateList(currentDate) {
    let timeList = [];
    for(let i = 0; i < 7; i++) {
        let obj = {};
        let arr = [];
        let temp = new Date(Date.parse(currentDate) + day * i);
        temp = new Date(temp.toDateString());
        obj['date'] = temp;
        for(let i = 1; i <= 3; i++) {//1 可预约 2 已被预约 3 预约人数
            let o = {};
            o['status'] = i;
            o['time'] = new Date(Date.parse(temp) + hour * 6 * i);
            if(i === 3) {
                o['number'] = 10;
            }
            arr.push(o);
        }
        obj['timeList'] = arr;
        timeList.push(obj);
    }
    return timeList;
}

function switchDayHandler(time) {
    switch (time) {
        case 6:
            return '上午';
        case 12:
            return '下午';
        case 18:
            return '晚上';
    }
}

function statusHandler(status, number) {
    switch (status) {
        case 1:
            return (
                <span className={'available'}>
                    可预约
                </span>
            );
        case 2:
            return (
                <span className="forbid">
                    已被预约
                </span>
            );
        case 3:
            return (
                <span className={'pending'}>
                    {
                        `有${number}人正在预约`
                    }
                </span>
            );
        default:
            return '';
    }
}

export {
    mapDate,
    getDateList,
    switchDayHandler,
    statusHandler,
};
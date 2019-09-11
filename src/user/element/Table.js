import React from 'react';
import './Table.scss';

class Table extends React.PureComponent {
    render() {
        return (
            <div id="Table">
                <div className="table_head">
                    {
                        this.props.checkBox ? (
                            <div className="border head_sel checkBox">
                                <input type="checkbox"/>
                            </div>
                        ) : ''
                    }
                    {
                        this.props.thList.map((item) => (
                            <div key={item.key}
                                 style={{
                                    width: item.width
                                 }}
                                className={'border head_sel'}>
                                {
                                    item.name
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="table_body">
                    {
                        this.props.tdList.map((dItem, dIndex) => (
                            <div key={`dItem${dIndex}`} className={'father_container'}>
                                {
                                    this.props.checkBox ? (
                                        <div className="border body_sel checkBox">
                                            <input type="checkbox"/>
                                        </div>
                                    ) : ''
                                }
                                {
                                    this.props.thList.map((hItem, index) => (
                                        <div className="body_sel"
                                             key={`${hItem}${index}`}
                                            style={{
                                                width: hItem.width,
                                            }}>
                                            {
                                                this.props.contentHandler(dItem, hItem)
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Table;
import React from 'react';
import './Table.scss';

class Table extends React.PureComponent {
    render() {
        return (
            <div id="Table">
                <div className="table_head">
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
            </div>
        )
    }
}

export default Table;
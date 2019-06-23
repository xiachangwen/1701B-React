import React from 'react';

export default class Dialog extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {obj} = this.props
        console.log(this.props.obj)
        return <div className="dialog">
            <div className="mack">
                <p>{obj.name}</p>

                <div className="center">
                {obj.contern ? obj.contern : <input />}
                </div>

                <div className="footer">
                    {obj.type !== 'alert' ? <div>取消</div> : ''}
                    <div onClick = {() => {
                        this.props.add()
                    }}>确定</div>
                </div>
            </div>

        </div>
    }
}
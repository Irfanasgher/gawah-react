import React from 'react';
import './Member.scss';

const member = props => {

    // console.log(props.match.params.id, "params id");
    let data = props.data.filter((data, index) => {
        // console.log(data.id, "data id");
        return data.id == props.match.params.id;

    });

    return (
        <div>

            {data.map((data, index) => {
                return (
                    <div id={'member'} key={data.id}>
                        {/*<Header arrow={true} to={'/management'}/>*/}
                        <div className="container profile-main">
                            <h1 className="text-center">{data.name}</h1>
                            <div className="row">
                                <div className="col-md-8 description">
                                    {data.paragraphs.map((data, index) => <p key={index}>{data}</p>)}
                                    {/*{membersData.paragraphs.map((membersData, index) =>{*/}
                                    {/*    return(*/}
                                    {/*        <p key={index}>{membersData}</p>*/}
                                    {/*        )*/}
                                    {/*}*/}
                                    {/*)}*/}
                                </div>
                                <div  className="col-md-4 img">
                                    <img  width={'300'} src={data.image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })};
        </div>
    );
};


export default member;

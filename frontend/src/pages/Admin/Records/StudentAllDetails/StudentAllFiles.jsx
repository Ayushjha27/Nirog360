import React from 'react'

const StudentAllFiles = (props) => {
    console.log(props)
    return (

        <div className='record-modal'>

            <div className='student-modal-report'>

                <div>{props.selectedAllDetails[0]?.student?.name}</div>
                <div>{props.selectedAllDetails[0]?.student?.email} </div>
                <div>{props.selectedAllDetails[0].roll} </div>

            </div>

            <div className='student-details-scroll'>

                {
                    props.selectedAllDetails.map((item) => {
                        return (
                            <div className='student-modal-detail'>

                                <div className='student-modal-header'>

                                    {item?.createdAt.slice(0, 10).split("-").reverse().join("-")}
                                </div>

                                <div className='student-modal-body-student'>

                                    <div className='student-modal-body-header'>
                                        <div>S.no.</div>

                                        <div>Medicine Name</div>

                                        <div>Quantity</div>
                                    </div>

                                    <div className='student-modal-body-item'>

                                        {
                                            item.medicines.map((it, index) => {
                                                return (
                                                    <div className='student-item-modal'>
                                                        <div>{index + 1}</div>
                                                        <div>{it?.name}</div>
                                                        <div>{it?.requiredQuantity}</div>

                                                    </div>
                                                );
                                            })
                                        }

                                    </div>

                                </div>

                            </div>
                        );
                    })
                }

            </div>

        </div>
    )
}

export default StudentAllFiles
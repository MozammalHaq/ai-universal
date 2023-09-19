import React from 'react';

const Modal = (props) => {
    // console.log(props.singleInfo)
    const { integrations, features } = props.singleInfo;
    console.log(props.singleInfo)
    // console.log(Object.values(features || {}))
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='flex justify-between'>
                        <div>
                            <h3 className="font-bold text-lg">Features</h3>
                            <ol className='list-decimal ps-4'>
                                {
                                    Object.values(features || []).map(item => <li>{item.feature_name}</li>)
                                }
                            </ol>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Integrations</h3>
                            <ol className='list-decimal ps-4'>
                                {
                                   integrations && integrations?.map(item => <li>{item}</li>)
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
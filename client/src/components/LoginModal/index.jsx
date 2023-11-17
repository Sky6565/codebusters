import React, { useState } from 'react';
import Modal from './Modal';
import Form from './Form';

function Main() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Logup</button>

            {showModal && (
                <Modal>
                    <button className='modal-cancel non-button-btn' onClick={() => setShowModal(false)}>x</button>
                    <Form />
                </Modal>
            )}
        </div>
    )
};

export default Main;
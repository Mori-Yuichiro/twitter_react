import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { memo, useCallback, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoArrowBack } from "react-icons/io5";

import { InputField } from "../atoms/InputField";
import { Button } from '../atoms/Button';
import { AxiosInstance } from '../../axios/axiosInstance';
import "../../style/modal/ProfileEditModal.scss";

export const ProfileEditModal = memo(({ showProfileEditModal, setShowProfileEditModal }) => {
    const [newProfile, setNewProfile] = useState({});
    const { instance } = AxiosInstance();

    const editProfile = useCallback(async () => {
        const resEditProfile = await instance.put(
            '/api/v1/profile',
            {
                user: newProfile
            }
        );
        console.log(resEditProfile);
        setShowProfileEditModal(!showProfileEditModal);
    }, [instance])

    if (!showProfileEditModal) return <></>;
    return (
        <div className="overlay">
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header>
                        <IoArrowBack className='arrow' onClick={() => setShowProfileEditModal(!showProfileEditModal)} />
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>

                    <form className="edit-profile-form" action="">
                        <Modal.Body>
                            <InputField
                                type='text'
                                name='name'
                                placeholder='Name'
                                onChange={(e) => setNewProfile({
                                    ...newProfile,
                                    'name': e.target.value
                                })}
                            />
                            <InputField
                                type='text'
                                name='bio'
                                placeholder='Bio'
                                onChange={(e) => setNewProfile({
                                    ...newProfile,
                                    'bio': e.target.value
                                })}
                            />
                            <InputField
                                type='text'
                                name='birthday' placeholder='Birthday'
                                onChange={(e) => setNewProfile({
                                    ...newProfile,
                                    'birthday': e.target.value
                                })}
                            />
                            <InputField
                                type='text'
                                name='location' placeholder='Locaiton'
                                onChange={(e) => setNewProfile({
                                    ...newProfile,
                                    'location': e.target.value
                                })}
                            />
                            <InputField
                                type='text'
                                name='website' placeholder='Website'
                                onChange={(e) => setNewProfile({
                                    ...newProfile,
                                    'website': e.target.value
                                })}
                            />
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Header Image</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={editProfile}>Edit profile</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Dialog>
            </div>
        </div>
    );
})
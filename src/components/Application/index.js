import React, { useState, useEffect } from 'react';
import { firestore } from '../Firebase';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import AppUsers from './AppUsers';
import AppRoles from './AppRoles';
import AppFeatures from './AppFeatures';
import AppRoleAllocation from './AppRoleAllocation';
import AppRoleAuthorization from './AppRoleAuthorization';
import Swal from 'sweetalert2';

const ApplicationComponent = ({ classes }) => {
  const appId = new URLSearchParams(window.location.search).get('appId');
  const [appName, setAppName] = useState('');
  const [description, setDescription] = useState('');
  const [key, setKey] = useState('users');

  useEffect(() => {
    firestore
      .collection('applications')
      .doc(appId)
      .onSnapshot((res) => {
        setAppName(res.data().application);
        setDescription(res.data().description);
      });
  }, [appId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore
      .collection('applications')
      .doc(appId)
      .update({
        application: appName,
        description: description,
      })
      .then(() => {
        Swal.fire({
          type: 'success',
          title: 'Done....',
          text: 'Updated successfully',
        });
      });
  };

  return (
    <>
      <div className='container mt-5 appDetails'>
        <div className='row well-lg'>
          <div className='col-12 appContainer'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-4'>
                  <input
                    type='text'
                    className='form-control'
                    id='appName'
                    name='appName'
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                  />
                </div>
                <div className='col-6'>
                  <textarea
                    className='form-control'
                    id='appDesc'
                    name='appDesc'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={1}
                  />
                </div>
                <div className='col-2'>
                  <input
                    type='submit'
                    className='btn btn-primary'
                    value='Update'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='row mt-5 tabsContainer'>
          <Tabs
            id='controlled-tab-example'
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey='users' title='Users'>
              <AppUsers />
            </Tab>
            <Tab eventKey='roles' title='Roles'>
              <AppRoles />
            </Tab>
            <Tab eventKey='features' title='Features'>
              <AppFeatures />
            </Tab>
            <Tab eventKey='allocation' title='Role Allocation'>
              <AppRoleAllocation />
            </Tab>
            <Tab eventKey='authorization' title='Role Authorization'>
              <AppRoleAuthorization />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ApplicationComponent;

import React, { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import userData from '../../data/userData';
import { firestore } from '../Firebase';
import AppList from './AppList';

const ApplicationsComponent = ({ classes }) => {
  const [applicationsList, setApplicationsList] = useState([]);
  useEffect(() => {
    firestore.collection('applications').onSnapshot((res) => {
      let appList = [];
      res.docs.forEach((doc) => {
        let obj = {
          id: doc.id,
          application: doc.data().application,
          description: doc.data().description,
        };
        appList = [...appList, obj];
        setApplicationsList(appList);
      });
    });
  }, []);
  useEffect(() => {}, [applicationsList]);
  return (
    <>
      <div className='container mt-5'>
        <div className='row well-lg'>
          <div className='col-12 appContainer'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Application</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {applicationsList.map((item, idx) => (
                  <AppList key={idx} data={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationsComponent;

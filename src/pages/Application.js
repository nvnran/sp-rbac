import React from 'react';
import Layout from '../ui/Layout';
import Application from '../components/Application';

const ApplicationPage = () => {
  return (
    <>
      <Layout>
        <Application classes='applications' />
      </Layout>
    </>
  );
};

export default ApplicationPage;

import React from 'react';
import Layout from '../ui/Layout';
import Applications from '../components/Applications';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Applications classes='applications' />
      </Layout>
    </>
  );
};

export default HomePage;

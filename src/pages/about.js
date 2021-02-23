import React from 'react';
import Layout from '../components/layout/layout';
import MetaData from '../components/meta-data/meta-data';
import Heading from '../components/heading/heading';
import dummy from '../images/dummy.jpg';

const AboutPage = () => (
  <Layout image={dummy}>
    <MetaData title="About" />
    <Heading title="About the Author" description="Short description of the current page" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
      molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias
      officiis assumenda officia quibusdam deleniti eos cupiditate dolore
      doloribus!
    </p>
    <p>
      Ad dolore dignissimos asperiores dicta facere optio quod commodi nam
      tempore recusandae. Rerum sed nulla eum vero expedita ex delectus
      voluptates rem at neque quos facere sequi unde optio aliquam!
    </p>
    <p>
      Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur
      porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi
      velit odio nam nulla unde amet odit pariatur at!
    </p>
  </Layout>
);

AboutPage.defaultProps = {};
AboutPage.propTypes = {};

export default AboutPage;

import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import MetaData from '../components/meta-data/meta-data';
import styles from './contact.module.scss';

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <MetaData title="Contact" />
      <div className={styles.contact_container}>
        <h1>Get in Touch</h1>
        <h2>Contact information</h2>
        <p>
          Contact information...<br/>
          Email...<br/>
          Telephon...<br/>
          etc.        </p>

        <h2>Or submit a form</h2>
        <p>Let me help you kick start your next project &rarr;</p>
        <form action={site?.email} method="post">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="sender">Email</label>
            <input type="email" name="sender" id="sender" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <div className={styles.contact_container__submit}>
            <input
              type="submit"
              className="button -primary"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

ContactPage.defaultProps = {};
ContactPage.propTypes = {
  data: PropTypes.object,
};

export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
        email
      }
    }
  }
`;

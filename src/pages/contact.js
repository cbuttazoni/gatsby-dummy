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
      <h1>{site?.title}</h1>
      <div className={[styles.two_grids, styles._contact].join(" ")}>
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className={styles.form_container}
            action="https://sendmail.w3layouts.com/SubmitContactForm"
            method="post"
          >
            <div>
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="w3lName" id="w3lName" />
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender" />
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input type="text" name="w3lSubject" id="w3lSubject" />
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea name="w3lMessage" id="w3lMessage"></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <input
                type="submit"
                className={[styles.button, styles._primary].join(" ")}
                style={{ marginRight: 0 }}
              />
            </div>
          </form>
        </div>
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
      }
    }
  }
`;

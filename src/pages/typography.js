import React from 'react';
import '../styles/styles.scss';
import Layout from '../components/layout/layout';
import MetaData from '../components/meta-data/meta-data';
import dummy from '../images/dummy.jpg';

const TypographyPage = () => (
  <Layout>
    <MetaData title="Typography" />
    <h1>Typography</h1>

    <h2>Heading</h2>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <h2>Text</h2>
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

    <h2>Link</h2>
    <a href="https://www.example.com">dummy link</a>

    <h2>Image</h2>
    <img src={dummy} width="100%" alt=""></img>

    <h2>Lists</h2>
    <h3>Unordered List</h3>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
    </ul>
    
    <h3>Ordered List</h3>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
    </ol>

    <h2>Blockquote</h2>
    <blockquote>
      Very important text<br/>
      Please read slowly ;-)
    </blockquote>

    <h2>Pre</h2>
    <pre>
      Check this coding...<br/>
      Different text.
    </pre>

    <h2>Code in Text</h2>
    <p>
      Some text with code inside <code>Check this coding...</code> Text goes on.
    </p>

    <h2>Buttons</h2>
    <button className="button -primary">Primary</button>
    <button className="button -primary -wide">Primary Wide</button>
    <button className="button -primary -small">Primary Small</button>
    <button className="button -primary -wide -small">Primary Wide Small</button>
    <button className="button -secondary">Secondary</button>
    <button className="button -secondary -wide">Secondary Wide</button>
    <button className="button -secondary -small">Secondary Small</button>
    <button className="button -secondary -wide -small">Secondary Wide Small</button>
    <button className="button -accent">Accent</button>
    <button className="button -accent -wide">Accent Wide</button>
    <button className="button -accent -small">Accent Small</button>
    <button className="button -accent -wide -small">Accent Wide Small</button>
    <button className="button -small">Small</button>
    <button className="button -wide">Wide</button>

  </Layout>
);

TypographyPage.defaultProps = {};
TypographyPage.propTypes = {};

export default TypographyPage;

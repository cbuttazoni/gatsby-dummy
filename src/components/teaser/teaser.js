import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './teaser.module.scss';

const Teaser = () => {
  const teasers = [
    {
      id: 1,
      frontTitle: 'frontTitle',
      frontIcon: 'check_circle',
      frontClass: styles.teaser_inner__front_1,
      backTitle: 'backTitle',
      backText: 'backText',
      backLink: '#',
    },
    {
      id: 2,
      frontTitle: 'frontTitle',
      frontIcon: 'check_circle',
      frontClass: styles.teaser_inner__front_2,
      backTitle: 'backTitle',
      backText: 'backText',
      backLink: '#',
    },
    {
      id: 3,
      frontTitle: 'frontTitle',
      frontIcon: 'check_circle',
      frontClass: styles.teaser_inner__front_3,
      backTitle: 'backTitle',
      backText: 'backText',
      backLink: '#',
    },
    {
      id: 4,
      frontTitle: 'frontTitle',
      frontIcon: 'check_circle',
      frontClass: styles.teaser_inner__front_4,
      backTitle: 'backTitle',
      backText: 'backText',
      backLink: '#',
    },
  ];

  return (
    <div className={styles.teasers}>
      {teasers?.map((teaser) => (
        <div key={teaser.id} className={styles.teaser}>
          <div className={styles.teaser_inner}>
            <div
              className={[
                styles.teaser_inner__front,
                teaser.frontClass
              ].join(' ')}
            >
              <span className="material-icons">{teaser.frontIcon}</span>
              <h5>{teaser.frontTitle}</h5>
            </div>
              <Link to={teaser.backLink} className={styles.teaser_inner__back}>
                <h5>{teaser.backTitle}</h5>
                <p>{teaser.backText}</p>
              </Link>
            {/* <div className={styles.teaser_inner__back}>
              <Link to={teaser.backLink}>
                <h5>{teaser.backTitle}</h5>
                <p>{teaser.backText}</p>
              </Link>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

// <div className={styles.teasers}>
//   <div className={styles.teaser}>
//     <div className={styles.teaser_inner}>
//       <div
//         className={[
//           styles.teaser_inner__front,
//           styles.teaser_inner__front_1,
//         ].join(' ')}
//       >
//         <span className="material-icons">check_circle</span>
//         <h5>title</h5>
//       </div>
//       <div className={styles.teaser_inner__back}>
//         <Link to="#">
//           <h5>back-title</h5>
//           <p>back-content</p>
//         </Link>
//       </div>
//     </div>
//   </div>
//   <div className={styles.teaser}>
//     <div className={styles.teaser_inner}>
//       <div
//         className={[
//           styles.teaser_inner__front,
//           styles.teaser_inner__front_2,
//         ].join(' ')}
//       >
//         <span className="material-icons">check_circle</span>
//         <h5>title</h5>
//       </div>
//       <div className={styles.teaser_inner__back}>
//         <h5>back-title</h5>
//         <p>back-content</p>
//       </div>
//     </div>
//   </div>
//   <div className={styles.teaser}>
//     <div className={styles.teaser_inner}>
//       <div
//         className={[
//           styles.teaser_inner__front,
//           styles.teaser_inner__front_3,
//         ].join(' ')}
//       >
//         <span className="material-icons">check_circle</span>
//         <h5>title</h5>
//       </div>
//       <div className={styles.teaser_inner__back}>
//         <h5>back-title</h5>
//         <p>back-content</p>
//       </div>
//     </div>
//   </div>
//   <div className={styles.teaser}>
//     <div className={styles.teaser_inner}>
//       <div
//         className={[
//           styles.teaser_inner__front,
//           styles.teaser_inner__front_4,
//         ].join(' ')}
//       >
//         <span className="material-icons">check_circle</span>
//         <h5>title</h5>
//       </div>
//       <div className={styles.teaser_inner__back}>
//         <h5>back-title</h5>
//         <p>back-content</p>
//       </div>
//     </div>
//   </div>
// </div>
// );
// };

Teaser.defaultProps = {
  // subTitle: '',
  // description: '',
};
Teaser.propTypes = {
  // title: PropTypes.string.isRequired,
  // subTitle: PropTypes.string,
  // description: PropTypes.string,
};

export default Teaser;

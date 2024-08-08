const Footer = () => {
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Company</h4>
            <ul style={styles.linkList}>
              <li><a href="/about" style={styles.link}>About Us</a></li>
              <li><a href="/careers" style={styles.link}>Careers</a></li>
              <li><a href="/blog" style={styles.link}>Blog</a></li>
              <li><a href="/contact" style={styles.link}>Contact</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Products</h4>
            <ul style={styles.linkList}>
              <li><a href="/pricing" style={styles.link}>Pricing</a></li>
              <li><a href="/features" style={styles.link}>Features</a></li>
              <li><a href="/integrations" style={styles.link}>Integrations</a></li>
              <li><a href="/enterprise" style={styles.link}>Enterprise</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Resources</h4>
            <ul style={styles.linkList}>
              <li><a href="/help-center" style={styles.link}>Help Center</a></li>
              <li><a href="/community" style={styles.link}>Community</a></li>
              <li><a href="/guides" style={styles.link}>Guides</a></li>
              <li><a href="/webinars" style={styles.link}>Webinars</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Legal</h4>
            <ul style={styles.linkList}>
              <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
              <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
              <li><a href="/security" style={styles.link}>Security</a></li>
              <li><a href="/compliance" style={styles.link}>Compliance</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  const styles = {
    footer: {
      backgroundColor: '#f8f9fa', // Light gray background color
      padding: '40px 20px',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap',
    },
    column: {
      flex: '1',
      minWidth: '200px',
      margin: '0 10px',
    },
    columnTitle: {
      fontSize: '18px',
      marginBottom: '20px',
      color: '#343a40', // Darker gray for titles
    },
    linkList: {
      listStyle: 'none',
      padding: '0',
    },
    link: {
      textDecoration: 'none',
      color: '#007bff', // Bootstrap blue for links
      marginBottom: '10px',
      display: 'block',
    },
  };
  
  export default Footer;
  
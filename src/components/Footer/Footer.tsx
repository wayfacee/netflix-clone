import { Select } from 'antd';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footerMenu">
          <ul>
            <li><a href="https://help.netflix.com/contactus">Questions? Contact us.</a></li>
            <li><a href="https://help.netflix.com/support/412">FAQ</a></li>
            <li><a href="https://www.netflix.com/youraccount">Account</a></li>
            <li><a href="http://ir.netflix.com/">http://ir.netflix.com/</a></li>
            <li><a href="https://www.netflix.com/watch">Ways to Watch</a></li>

            <Select
              defaultValue="English"
              style={{ width: 120, backgroundColor: 'inherit' }}
              // onChange={handleChange}
              options={[
                { value: 'English', label: 'English' },
              ]}
            />
          </ul>

          <ul>
            <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
            <li><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
            <li><a href="https://fast.com/">Speed Test</a></li>
            <li><a href="https://www.netflix.com/kg/browse/genre/839338">Only on Netflix</a></li>
          </ul>

          <ul>
            <li><a href="https://help.netflix.com/">Help Center</a></li>
            <li><a href="https://media.netflix.com/">Media Center</a></li>
            <li><a href="https://jobs.netflix.com/jobs">Jobs</a></li>
            <li><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
          </ul>

          <ul>
            <li><a href="https://www.netflix.com/kg/#">Cookie Preferences</a></li>
            <li><a href="https://help.netflix.com/contactus">Contact Us</a></li>
            <li><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
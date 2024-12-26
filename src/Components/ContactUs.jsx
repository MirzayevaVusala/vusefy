import "./ContactUsStyles.css"
export default function ContactUs(){
    return(
       
           <main className="contact-us-main">
      <h1 className="contact-us-title">Contact Us</h1>
      <div className="contact-us-content">
        <p>If you have any questions or inquiries, feel free to reach out to us. We are here to assist you!</p>
        
        <div className="contact-info">
                   <div className="contact-item">
            <h3>Email Us:</h3>
            <p><a href="mailto:support@vusefy.com">support@vusefy.com</a></p>
          </div>
                  <div className="contact-item">
            <h3>Call Us:</h3>
            <p>+994 888 88 88</p>
          </div>
          
                <div className="contact-item">
            <h3>Follow Us:</h3>
            <p>
              <a href="https://facebook.com/vusefy" target="_blank" rel="noopener noreferrer">Facebook</a> | 
              <a href="https://instagram.com/vusefy" target="_blank" rel="noopener noreferrer">Instagram</a> | 
              <a href="https://twitter.com/vusefy" target="_blank" rel="noopener noreferrer">Twitter</a>
            </p>
          </div>
          
                  <div className="contact-item">
            <h3>Our Location:</h3>
            <p>123 Travel Street, Adventure City, Country 45678</p>
          </div>
        </div>
      </div>
    </main>
 
    )
}
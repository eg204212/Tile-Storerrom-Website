import react, {useState} from "react";
import '../Components/HomeDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StaffLogin } from './StaffLogin';
import { Link } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
      setShowLogin(!showLogin);
    };


    const onBtn_luxeryButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);
    
    const onBtn_wallButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);

    const onBtn_woodButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);

    const onBtn_smallButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);

    const onBtn_1ButtonClick = useCallback(() => {
    
      setShowLogin(true); 
    }, [setShowLogin]);

    return (
    <div className="Classmain">
    <div >
           
            <div className="class2">
                <form className="Texts1">Welcome to</form> 
                <form className="contain_1">
                <form>
                  <Link to="/StaffLogin">
                <button className="Btn_1">LOG IN</button>
                  </Link></form> 
                  <form> <Link to="/StaffRegister">
                  <button className="Btn_1_s">Sign Up</button>
                  </Link></form>
                </form>
                <div className="Logos">
                    <form><span></span> </form>
                </div>
                     <div className="Texts2">
                        <form> CERAMICS TILES STOREROOM</form> 
                        <form className="Texts3">where inspiration comes in boxes</form>
                    </div>
            </div> 

        </div>
        <form className="text_st1">A RANGE FOR EVERY SPACE</form>
        <form className="text_st2">Collections</form>
        <div className="containerr">
        <form >
          <button className="Btn_luxery" onClick={onBtn_luxeryButtonClick}>
          
          </button>
        </form>
        
      <form >
          <button className="Btn_wall" onClick={onBtn_wallButtonClick}> 
      
          </button>
        </form>
        <form >
          <button className="Btn_wood" onClick={onBtn_woodButtonClick}>
        
          </button>
        </form>
        <form >
          <button className="Btn_small" onClick={onBtn_smallButtonClick}>
         
          </button>
        </form>
        </div>
        <form className="text4">Welcome to our new Ceramics TileStoreroom website.
             We will be adding more ranges to our site on a weekly basis,
              for our full range, please visit our store.</form>
               <form className="text4_1">SRI LANKA WIDE DELIVERY NOW AVAILABLE</form>

        <div className="Class_pro">
                <div className="footer-container">
                    <div className="footer-item">
                      <form className="ft">Our Services</form>
                      <hr className="footer-line" />
                        <button className="footer-button" onClick={onBtn_luxeryButtonClick}>Luxury Tiles</button>
                        <button className="footer-button" onClick={onBtn_wallButtonClick}>Wall Tiles</button>
                        <button className="footer-button" onClick={onBtn_woodButtonClick}>Wood Effect</button>
                        <button className="footer-button" onClick={onBtn_smallButtonClick}>Small Tiles</button>
                    </div>
                    <div className="footer-item">
                    <form className="ft">Follow Us On</form>
                    <hr className="footer-line" />
                        <button className="footer-button" >Like us on Facebook</button>
                        <button className="footer-button">Follow us on Instagram</button>
                        <button className="footer-button">Terms of Service</button>

                        <div className="footer-icons">
                            <img  className="footer-icon1" />
                            <img  className="footer-icon2" />
                       </div>

                    </div>
                    <div className="footer-item">
                    <form className="ft">Contact Us</form>
                    <hr className="footer-line" />
                        <p className="footer-button">No 4/3, Hapugala, Galle</p>
                        <p className="footer-button">+94 453 456 792</p>
                        <p className="footer-button">ceramic@gmail.com</p>
                       

                    </div>
                </div>
            </div>
         {/* Conditionally render the login page */}
         {showLogin && <StaffLogin />}
    

    </div>       
  );
};
export default Home;
import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png';


const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>An online shopping essay is a piece of writing that discusses the pros and cons of buying products or services through the internet.</p>
                <div className="ctas"> {/* ctas=call to actions */}
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;

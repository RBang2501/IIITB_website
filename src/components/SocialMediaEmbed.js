import { InstagramEmbed, LinkedInEmbed, TwitterEmbed } from 'react-social-media-embed';
import "../assets/styles/embed.css"
import Instagram from '@mui/icons-material/Instagram';
import { Twitter } from '@mui/icons-material';

export const SocialMediaEmbed = () => {
    return (
        <>
            <div className='d-flex justify-content-around my-5'>
                {/* <div className='col-2'></div> */}
                <div className='col-6'>
                    <h4 className='text-center mb-0 pb-0' style={{ fontFamily: 'lobster' }}><Instagram className='mb-1' style={{ fontSize: '30px' }} /> Follow us on Instagram</h4>
                    <div className='insta-container my-0 py-0' style={{ display: 'flex' }}>
                        <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CoZiWXuyYXR/?utm_source=ig_web_copy_link" width={328} />
                        <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CoZuU79S0u5/?utm_source=ig_web_copy_link" width={328} />
                    </div>
                    <div className='insta-container my-0 py-0' style={{ display: 'flex', transform: 'translateY(-55px)' }}>
                        <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CocPkCqvZhp/?utm_source=ig_web_copy_link" width={328} />
                        <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CoZiAAcyudW/?utm_source=ig_web_copy_link" width={328} />
                    </div>
                </div>

                <div className='col-'>
                    <h5 className='mb-0 pb-0' style={{ fontFamily: 'monospace' }}><Twitter className='mb-1' style={{ fontSize: '30px' }} /> Tweets @IIITB_official</h5>
                    <div className='shadow' style={{ height: '650px', overflow: 'scroll' }}>
                        <TwitterEmbed
                            url="https://twitter.com/IIITB_official/status/1626526926398685184?ref_src=twsrc%5Etfw"
                            width={325}
                        />
                        <TwitterEmbed
                            url="https://twitter.com/IIITB_official/status/1626162332530507776?ref_src=twsrc%5Etfw"
                            width={325}
                        />
                    </div>
                </div>

            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LinkedInEmbed
                    url="https://www.linkedin.com/embed/feed/update/urn:li:share:7032291964393844736"
                    // postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                    height={863}
                    width={325}
                />
            </div> */}
        </>
    );
}


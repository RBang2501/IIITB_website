import { InstagramEmbed, LinkedInEmbed, TwitterEmbed } from 'react-social-media-embed';
import "../assets/styles/embed.css"

export const SocialMediaEmbed = () => {
    return (
        <>
            <div className='d-flex'>
                <div className='w-50'></div>
                <div className='w-50'>
                <div className='insta-container my-0 py-0' style={{ display: 'flex' }}>
                    <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CoZiWXuyYXR/?utm_source=ig_web_copy_link" width={328} />
                    <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CoZuU79S0u5/?utm_source=ig_web_copy_link" width={328} />
                </div>
                <div className='insta-container my-0 py-0' style={{ display: 'flex', transform:'translateY(-55px)'}}>
                    <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CocPkCqvZhp/?utm_source=ig_web_copy_link" width={328} />
                    <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CoZiAAcyudW/?utm_source=ig_web_copy_link" width={328} />
                </div>
                </div>
            </div>

            <TwitterEmbed
                url="https://twitter.com/IIITB_official/status/1626526926398685184?ref_src=twsrc%5Etfw"
                width={325}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LinkedInEmbed
                    url="https://www.linkedin.com/embed/feed/update/urn:li:share:7032291964393844736"
                    // postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                    height={863}
                    width={564}
                />
            </div>
        </>
    );
}


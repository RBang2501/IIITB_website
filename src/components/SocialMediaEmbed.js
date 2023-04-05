import { InstagramEmbed, LinkedInEmbed, TwitterEmbed, YouTubeEmbed } from 'react-social-media-embed';
import "../assets/styles/embed.css"
import Instagram from '@mui/icons-material/Instagram';
import { LinkedIn, Twitter, YouTube } from '@mui/icons-material';

export const SocialMediaEmbed = () => {
  return (
    <>
      <div
        className="bg-white shadow-lg pt-3 my-3 mt-5 rounded mx-auto"
        style={{ width: "96%" }}
      >
        <h3 className="text-center fw-bold">Media-@IIITB</h3>
        <h6 className="text-center text-secondary">
          All that's new and happening at IIITB
        </h6>

        <hr
          className="mx-5"
          style={{
            color: "grey",
            fontWeight: "700",
            height: "10px",
            fontSize: "20px",
          }}
        />
        <div
          className="media-embed-div my-5 mx-auto"
          style={{ width: "96%" }}
        >
          {/* <div className='col-2'></div> */}
          <div className="col-lg media-embed-width">
            <h4
              className="text-center mb-0 pb-0"
              style={{ fontFamily: "lobster" }}
            >
              <Instagram className="mb-1" style={{ fontSize: "30px" }} />{" "}
              Follow us on Instagram
            </h4>
            <div
              className="insta-container justify-content-center mx-auto my-0 py-0"
              style={{ display: "flex" }}
            >
              <InstagramEmbed
                className="instaEmbed shadow-lg"
                captioned="false"
                url="https://www.instagram.com/p/CoZiWXuyYXR/?utm_source=ig_web_copy_link"
                width={328}
              />
              {/* <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CoZuU79S0u5/?utm_source=ig_web_copy_link" width={328} /> */}
            </div>
            <div
              className="insta-container justify-content-center mx-auto my-0 py-0"
              style={{ display: "flex", transform: "translateY(-55px)" }}
            >
              <InstagramEmbed
                className="instaEmbed shadow-lg"
                captioned="false"
                url="https://www.instagram.com/p/CocPkCqvZhp/?utm_source=ig_web_copy_link"
                width={328}
              />
              {/* <InstagramEmbed className='instaEmbed' captioned="false" url="https://www.instagram.com/p/CoZiAAcyudW/?utm_source=ig_web_copy_link" width={328} /> */}
            </div>
          </div>

          <div className="mobile-invisible col-lg-5 media-embed-width">
            <h5 className="text-center mb-0 pb-0 fw-bold" style={{ fontFamily: "sans-serif" }}>
              <LinkedIn className="mb-1" style={{ fontSize: "30px" }} />{" "}
              Linkedin
            </h5>
            <div className="" style={{ height: "650px", overflow: "scroll" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <LinkedInEmbed
                  className="border border-3"
                  url="https://www.linkedin.com/embed/feed/update/urn:li:share:7031927335087988736"
                  // postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                  width="100%"
                  height={320}
                />
              </div>
              <h5
                className="text-center mb-0 pb-0 fw-bold"
                style={{ fontFamily: "kanit" }}
              >
                <YouTube className="mb-1" style={{ fontSize: "30px" }} /> IITB
                Campus Tour
              </h5>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <YouTubeEmbed
                  className="border rounded border-3"
                  url="https://youtu.be/eln9l9SxKyo"
                  width="100%"
                  height={280}
                />
              </div>
            </div>
          </div>

          <div className='desktop-invisible pb-3'>
            <h3
              className="text-center mb-0 pb-0 fw-bold"
              style={{ fontFamily: "kanit" }}
            >
              <YouTube className="mb-1" style={{ fontSize: "50px" }} /> IITB
              Campus Tour
            </h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <YouTubeEmbed
                className="border rounded border-3"
                url="https://youtu.be/eln9l9SxKyo"
                width="100%"
                height={280}
              />
            </div>
          </div>

          <div className="mobile-invisible col-lg-3 media-embed-width">
            <h5 className="mb-0 pb-0 text-center" style={{ fontFamily: "monospace" }}>
              <Twitter className="mb-1" style={{ fontSize: "30px" }} />{" "}
              @IIITB_official
            </h5>
            <div
              className="shadow-lg twitter-constraint"
              style={{ overflow: "scroll" }}
            >
              <TwitterEmbed
                url="https://twitter.com/IIITB_official/status/1626526926398685184?ref_src=twsrc%5Etfw"
                width="100%"
              />
              <TwitterEmbed
                url="https://twitter.com/IIITB_official/status/1626162332530507776?ref_src=twsrc%5Etfw"
                width="100%"
              />
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <YouTubeEmbed url="https://youtu.be/eln9l9SxKyo" width="100%" height={300} />
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
}


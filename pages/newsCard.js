import Link from 'next/link';

const NewsCard = ({ title, image, description }) => (
  <div className="cols2">
    <div className="card24 ">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
       
      </div>
    </div>
  </div>
);

const BigCard = ({ title, children }) => (
  <div className="card25">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div className="row">{children}</div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="container2">
      <BigCard title="News">
        <NewsCard
          title="News Title 1"
          image="image_url_1.jpg"
          description="Description for News 1"
        />
        <NewsCard
          title="News Title 2"
          image="image_url_2.jpg"
          description="Description for News 2"
        />
        <NewsCard
          title="News Title 3"
          image="image_url_3.jpg"
          description="Description for News 3"
        />
      </BigCard>
      <BigCard title="News">
        <NewsCard
          title="News Title 1"
          image="image_url_1.jpg"
          description="Description for News 1"
        />
        <NewsCard
          title="News Title 2"
          image="image_url_2.jpg"
          description="Description for News 2"
        />
        <NewsCard
          title="News Title 3"
          image="image_url_3.jpg"
          description="Description for News 3"
        />
      </BigCard>
      <BigCard title="News">
        <NewsCard
          title="News Title 1"
          image="image_url_1.jpg"
          description="Description for News 1"
        />
        <NewsCard
          title="News Title 2"
          image="image_url_2.jpg"
          description="Description for News 2"
        />
        <NewsCard
          title="News Title 3"
          image="image_url_3.jpg"
          description="Description for News 3"
        />
      </BigCard>
      
        
      
      <div>
        <div className="card26">
          <div className='bigcard_f'>
          <BigCard title="News">
            <NewsCard
              title="News Title 1"
              image="image_url_1.jpg"
              description="Description for News 1"
            />
            </BigCard>
            </div>
              <div className="card2-header">
                <h4 className="card-title">Top Stories</h4>
                <div className="unpaid-content">
                  <ul>
                    <li>
                      <p className="mb-0">August 20, 2015</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card2-header">
                <h6 className="card-title">
                  Vettel will do anything to 'annoy mercedes
                </h6>
              </div>
            </div>
          
        </div>
        <div>
        <div className="card27">
              <div className="card2-header">
                
                <div className="card1">
          <div className="card-image2">
            <p style={{ fontWeight: "Bold", margin: "10px", color: "Grey" }}>
              {" "}
              Photo of the week
            </p>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "477px",
                marginLeft: "10px",
              }}
            >
              Pastor Maldolando, Lotus, Formula 1 - 2015 Spain
            </p>
          </div>
        </div>
              </div>
            </div>
        </div>
        <div className="card28">
              <div className="card2-header">
                <h4 className="card-title">Top Stories</h4>
                
              </div>
              <div className="card2-header">
                <h6 className="card-title">
                  Vettel will do anything to 'annoy mercedes
                </h6>
              </div>
            </div>
        </div>
  );
};

export default Home;

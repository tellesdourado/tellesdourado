import "./App.css";
import seed from "./seed.json";
import profile from "./assets/picture.jpg";

function App() {
  const socialRedirect = (link) => {
    window.location.href = link;
  };

  return (
    <>
      <title>{seed.pageTitle}</title>

      <div className="container">
        <div className="col-xs-12">
          <div
            className="text-center"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <img
              src={profile}
              className="backdrop linktree"
              alt="profilePhoto"
            />
            <h2 style={{ color: "#ffffff", paddingTop: "20px" }}>
              {seed.name}
            </h2>
            <h5>{seed.title}</h5>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-xs-12">
          <div className="text-center">
            {seed.social.map((social, key) => (
              <div key={key} style={{ paddingBottom: "30px" }}>
                <button
                  onClick={() => socialRedirect(social.link)}
                  type="button"
                  className="btn btn-outline-light"
                  style={{
                    width: "80%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontWeight: 800,
                  }}
                >
                  {social.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <p style={{ color: "#34312f" }}>powered {seed.author}</p>
      </div>
    </>
  );
}

export default App;

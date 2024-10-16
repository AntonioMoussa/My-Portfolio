import { Box, Typography, Avatar } from "@mui/material";

function MainContent() {
  return (
    <main>
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "left",
          flexDirection: "column",
        }}
      >
        <Box
        className="icon-container"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 2,
            mb: 2,
            flexWrap: "wrap",
          }}
        >
          {[
            "/Ts.png",
            "/React.png",
            "/firebase.png",
            "/css.png",
            "/HTML5.png",
            "/Mongodb.png",
            "/Npm.png",
            "/Js.png",
          ].map((src, index) => (
            <Box
              key={index}
              sx={{
                width: 60,
                height: 70,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt={`Bild ${index + 1}`}
                style={{
                  maxwidth: "100%",
                  maxheight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
         className="main-content">
          <Avatar
            alt="Antonio"
            src="/Antonio.png"
            className="avatar" 
            sx={{ borderRadius: 0 }}
          />

<Box sx={{ ml: { sm: 2 } }}>
    <img
      src="/Chart.board.png"
      alt="Chart board"
      className="chart-board"  
      style={{ width: 600, height: "auto" }}
    />
  </Box>
        </Box>
      </Box>

      <Box sx={{ p: 2, textAlign: "center", paddingBottom: "60px" }}>
        <img
          src="/Laptop.png"
          alt="Bild ovanför Projects"
          style={{ width: 200, height: "auto", marginBottom: "10px" }}
        />

        <Typography
          variant="body1"
          paragraph
          sx={{ fontFamily: "Itim", fontSize: "20px" }}
        >
          Här är några av mina projekt som jag har arbetat med.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <a
              href="https://spotify-clone.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-container">
                <img
                  src="/spotify-logo.png"
                  alt="Spotify Clone"
                  className="logo-image"
                />
                <img
                  src="/Spotify.clone.png"
                  alt="Projekt 1"
                  className="project-image hover"
                />
              </div>
            </a>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Itim", fontSize: "16px", mt: 1 }}
            >
              Spotify Clone
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <a
              href="https://worldflagapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-container">
                <img
                  src="/flag-logo.png"
                  alt="Flag Project"
                  className="logo-image"
                />
                <img
                  src="/Flagproject.png"
                  alt="Projekt 2"
                  className="project-image hover"
                />
              </div>
            </a>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Itim", fontSize: "16px", mt: 1 }}
            >
              Flag Project
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <a
              href="https://klarna-checkout.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-container">
                <img
                  src="/Klarna-logo.png"
                  alt="Klarna Checkout"
                  className="logo-image"
                />
                <img
                  src="/Klarna.Checkout.png"
                  alt="Projekt 3"
                  className="project-image hover"
                />
              </div>
            </a>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Itim", fontSize: "16px", mt: 1 }}
            >
              Klarna Checkout
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <a
              href="https://newpasswordgenerator1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-container">
                <img
                  src="/lock-logo.png"
                  alt="Password Generator"
                  className="logo-image"
                />
                <img
                  src="/Password.generator.png"
                  alt="Projekt 4"
                  className="project-image hover"
                />
              </div>
            </a>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Itim", fontSize: "16px", mt: 1 }}
            >
              Password Generator
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <a
              href="http://127.0.0.1:5500/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-container">
                <img
                  src="/gift-logo.png"
                  alt="Beställningskort"
                  className="logo-image"
                />
                <img
                  src="/Beställnings.kort.png"
                  alt="Projekt 5"
                  className="project-image hover"
                />
              </div>
            </a>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Itim", fontSize: "16px", mt: 1 }}
            >
              Beställningskort
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <a
              href="http://127.0.0.1:5500/motivationsgenerator/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-container">
                <img
                  src="/light-logo.png"
                  alt="Motivations Generator"
                  className="logo-image"
                />
                <img
                  src="/Motivations.generator.png"
                  alt="Projekt 6"
                  className="project-image hover"
                />
              </div>
            </a>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Itim", fontSize: "16px", mt: 1 }}
            >
              Motivations Generator
            </Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default MainContent;

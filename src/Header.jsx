import { AppBar, Toolbar, IconButton, Box } from "@mui/material";

function Header() {
  return (
    <AppBar position="fixed" sx={{ top: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between", paddingX: 2 }}>
        {/* Container för CV-knappen och certifikat knappen */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {/* CV-knappen */}
          <IconButton
            color="inherit"
            href="/antonio-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&::before, &::after": {
                content: "none",
              },
            }}
          >
            <Box
              component="img"
              src="/CV.png"
              alt="Download CV"
              sx={{ width: 80, height: 70 }}
            />
          </IconButton>

          {/* Certifikat-knappen */}
          <IconButton
            color="inherit"
            href="/antonio-cert.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&::before, &::after": {
                content: "none",
              },
            }}
          >
            <Box
              component="img"
              src="/Contract.png"
              alt="Certifikat"
              sx={{ width: 80, height: 70 }}
            />
          </IconButton>
        </Box>

        {/* My portfolio */}
        <Box
          component="img"
          src="/My-Portfolio.svg"
          alt="Portfolio"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: 250,
            height: 50,
          }}
        />

        {/* Sociala medier-knappar */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <IconButton
            color="inherit"
            href="https://github.com/AntonioMoussa"
            target="_blank"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&::before, &::after": {
                content: "none",
              },
            }}
          >
            <Box
              component="img"
              src="/Github.png"
              alt="GitHub"
              sx={{ width: 70, height: 70 }}
            />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/antonio-moussa-7a27421b0/"
            target="_blank"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&::before, &::after": {
                content: "none",
              },
            }}
          >
            <Box
              component="img"
              src="/Linkedin.png"
              alt="LinkedIn"
              sx={{ width: 70, height: 70 }}
            />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.instagram.com/antonio.moussa_/"
            target="_blank"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&::before, &::after": {
                content: "none",
              },
            }}
          >
            <Box
              component="img"
              src="/Instagram.png"
              alt="Instagram"
              sx={{ width: 70, height: 70 }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

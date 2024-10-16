import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: "primary.main",
        color: "#21130d",
        p: 0.1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: 3,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          component="img"
          src="/Euro.Coin.png"
          alt="Euro"
          sx={{ width: 50, height: 50 }}
        />
        <Typography variant="body2" sx={{ fontFamily: "Itim" }}>
          © 2024 Antonio Moussa.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body2" sx={{ fontFamily: "Itim" }}>
          E-mail me!
        </Typography>
        <a
          href="mailto:Antonio.moussa@hotmail.com"
          style={{ textDecoration: "none" }}
        >
          <Box
            component="img"
            src="/Mail.png"
            alt="Contact"
            sx={{
              width: 60,
              height: 50,
              "&:hover": {
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
            }}
          />
        </a>
      </Box>
    </Box>
  );
}

export default Footer;

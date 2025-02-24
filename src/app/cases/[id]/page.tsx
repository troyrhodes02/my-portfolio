import { notFound } from "next/navigation";
import { getAllCaseStudies } from "../../../../data/caseStudies";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { CaseStudy } from "../../../../data/caseStudies";
import { Navbar } from "../../../../components/navbar/Navbar";

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((cs: CaseStudy) => ({ id: cs.id }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const caseStudies = getAllCaseStudies();
  const caseStudy = caseStudies.find((cs: CaseStudy) => cs.id === id);
  if (!caseStudy) {
    notFound();
  }
  const contributions =
    caseStudy.myContributions || caseStudy.contributions || [];

  // Conditions for specific case studies
  const isYoungStarWorld = caseStudy.id === "youngstarworld";
  const isGoNext = caseStudy.id === "gonext";
  const isPolitiMap = caseStudy.id === "politimap";
  const isPremierLeaf = caseStudy.id === "premierleaf";
  const isPremierLeafWellness = caseStudy.id === "premierleaf-wellness";

  const cardBg = isYoungStarWorld
    ? "#ab100b"
    : isGoNext
    ? "#fd8601"
    : isPolitiMap
    ? "#25324dff"
    : isPremierLeaf
    ? "#103831"
    : isPremierLeafWellness
    ? "#7d6747"
    : "white";
  const cardTextColor =
    isYoungStarWorld ||
    isGoNext ||
    isPolitiMap ||
    isPremierLeaf ||
    isPremierLeafWellness
      ? "white"
      : "black";
  const containerTextColor =
    isYoungStarWorld ||
    isGoNext ||
    isPolitiMap ||
    isPremierLeaf ||
    isPremierLeafWellness
      ? "white"
      : "black";

  const baseCardStyle = {
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    mb: { xs: 2, sm: 4 },
    p: { xs: 2, sm: 4 },
    position: "relative",
    overflow: "hidden",
  };

  const cardStyle = {
    ...baseCardStyle,
    backgroundColor: cardBg,
    color: cardTextColor,
  };

  const backgroundOverlay = (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url(/smooth3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.3,
        zIndex: 0,
      }}
    />
  );

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          mt: { xs: 8, sm: 8, md: 8 },
          mx: "auto",
          width: { xs: "90%", sm: "80%", md: "70%" },
          textAlign: "center",
          color: containerTextColor,
        }}
      >
        <Card sx={{ ...cardStyle, p: { xs: 1, sm: 2 } }}>
          {backgroundOverlay}
          <CardContent sx={{ position: "relative", zIndex: 1 }}>
            <Box sx={{ textAlign: "center", mb: { xs: 2, sm: 4 } }}>
              <Image
                src={caseStudy.headerImage}
                alt={caseStudy.title}
                width={600}
                height={400}
                sizes="(max-width: 960px) 300px, 600px"
                style={{ borderRadius: "8px", width: "100%", height: "auto" }}
              />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: { xs: 2, sm: 2 },
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              {caseStudy.title}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ ...cardStyle }}>
          {backgroundOverlay}
          <CardContent sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, sm: 2 },
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Project Overview
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 2 },
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              <strong>Mission Statement:</strong>{" "}
              {caseStudy.projectOverview
                ? caseStudy.projectOverview.missionStatement
                : caseStudy.missionStatement}
            </Typography>
            {caseStudy.projectOverview && (
              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 2, sm: 4 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                <strong>Target Audience:</strong>{" "}
                {caseStudy.projectOverview.targetAudience}
              </Typography>
            )}
          </CardContent>
        </Card>
        {contributions.length > 0 && (
          <Card sx={{ ...cardStyle }}>
            {backgroundOverlay}
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2, sm: 2 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                {caseStudy.myContributions
                  ? "My Contributions"
                  : "Contributions"}
              </Typography>
              {contributions.map((contribution, index) => (
                <Box
                  key={index}
                  sx={{ mb: { xs: 2, sm: 3 }, textAlign: "left" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 900,
                      mb: 1,
                      textTransform: "uppercase",
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                  >
                    {contribution.title}
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 4,
                      "& .MuiListItem-root": {
                        display: "list-item",
                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                      },
                    }}
                  >
                    {contribution.details.map((detail, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemText
                          primary={detail}
                          sx={{
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}
        {caseStudy.techStack && (
          <Card sx={{ ...cardStyle }}>
            {backgroundOverlay}
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2, sm: 2 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Tech Stack &amp; Tools
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 2, sm: 4 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {caseStudy.techStack.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        )}
        {caseStudy.challenges && (
          <Card sx={{ ...cardStyle }}>
            {backgroundOverlay}
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2, sm: 2 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Challenges &amp; Solutions
              </Typography>
              {caseStudy.challenges.map((challenge, index) => (
                <Box
                  key={index}
                  sx={{ mb: { xs: 2, sm: 3 }, textAlign: "left" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 900,
                      mb: 1,
                      textTransform: "uppercase",
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                  >
                    {challenge.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: { xs: 1, sm: 1 },
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    <strong>Problem:</strong> {challenge.problem}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: { xs: 1, sm: 1 },
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    <strong>Solution:</strong>
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 4,
                      "& .MuiListItem-root": {
                        display: "list-item",
                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                      },
                    }}
                  >
                    {challenge.solution.map((sol, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemText
                          primary={sol}
                          sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}
        {caseStudy.results && (
          <Card sx={{ ...cardStyle }}>
            {backgroundOverlay}
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2, sm: 2 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Results &amp; Impact
              </Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  textAlign: "left",
                  "& .MuiListItem-root": {
                    display: "list-item",
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                  },
                }}
              >
                {caseStudy.results.map((result, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemText
                      primary={result}
                      sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" } }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}
        {caseStudy.keyTakeaways && (
          <Card sx={{ ...cardStyle }}>
            {backgroundOverlay}
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2, sm: 2 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Key Takeaways &amp; Future Improvements
              </Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  textAlign: "left",
                  "& .MuiListItem-root": {
                    display: "list-item",
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                  },
                }}
              >
                {caseStudy.keyTakeaways.map((takeaway, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemText
                      primary={takeaway}
                      sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" } }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}
        {caseStudy.finalThoughts && (
          <Card sx={{ ...cardStyle }}>
            {backgroundOverlay}
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2, sm: 2 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Final Thoughts
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 2, sm: 4 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {caseStudy.finalThoughts}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
}

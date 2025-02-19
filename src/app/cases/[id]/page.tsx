"use client";

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

interface CaseStudyPageProps {
  params: { id: string };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = params;
  const caseStudies = getAllCaseStudies();
  const caseStudy = caseStudies.find((cs: CaseStudy) => cs.id === id);

  if (!caseStudy) {
    notFound();
  }

  const contributions =
    caseStudy.myContributions || caseStudy.contributions || [];
  const isYoungStarWorld = caseStudy.id === "youngstarworld";
  const cardBg = isYoungStarWorld ? "#888888" : "white";
  const cardTextColor = isYoungStarWorld ? "white" : "black";
  const containerTextColor = isYoungStarWorld ? "white" : "black";
  const baseCardStyle = {
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    mb: { xs: 2, sm: 4 },
    p: { xs: 2, sm: 4 },
  };
  const cardStyle = {
    ...baseCardStyle,
    backgroundColor: cardBg,
    color: cardTextColor,
  };

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
          <CardContent>
            <Box sx={{ textAlign: "center", mb: { xs: 2, sm: 4 } }}>
              <Image
                src={caseStudy.headerImage}
                alt={caseStudy.title}
                width={600}
                height={200}
                style={{ borderRadius: "8px", width: "100%" }}
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
          <CardContent>
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
      </Container>
    </Box>
  );
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((cs) => ({ id: cs.id }));
}

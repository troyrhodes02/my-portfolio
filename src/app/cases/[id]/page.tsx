import { notFound } from "next/navigation";
import { getCaseStudyById } from "../../../../data/caseStudies";
import { Box, Container, Typography } from "@mui/material";

interface CaseStudyPageProps {
  params: { id: string };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = await getCaseStudyById(params.id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "auto" }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <img
            src={caseStudy.headerImage}
            alt={caseStudy.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          {caseStudy.title}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4 }}>
          Mission Statement
        </Typography>
        <Typography variant="body1">
          {caseStudy.missionStatement}
        </Typography>
      </Container>
    </Box>
  );
}

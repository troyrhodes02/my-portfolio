import caseStudiesData from "./caseStudies.json";

// TypeScript interface for a case study
export interface CaseStudy {
  id: string;
  title: string;
  headerImage: string;
  missionStatement: string;
  targetAudience: string;
  contributions: { title: string; details: string[] }[];
  techStack: string[];
  backgroundColor: string;
  link: string;
}

// Function to get all case studies
export const getAllCaseStudies = (): CaseStudy[] => caseStudiesData;

// Function to get a single case study by ID
export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudiesData.find((study) => study.id === id);
};

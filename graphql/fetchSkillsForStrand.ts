import { gql } from "@apollo/client";

export const FETCH_SKILLS_FOR_STRAND = gql`
  query fetchSkillsForStrand($strand: String = "") {
    skills(where: { strand: { _eq: $strand } }) {
      id
      description
      strand
      image
      unit {
        title
        level
      }
    }
  }
`;

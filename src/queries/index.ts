import { gql } from "@apollo/client";

export const querySpaceCenters = gql`
  query SpaceCenters($page: Int) {
    spaceCenters(page: $page, pageSize: 9) {
      nodes {
        id
        name
        planet {
          id
        }
      }
    }
  }
`;

export const querySpaceCenter = gql`
  query SpaceCenter($id: ID) {
    spaceCenter(id: $id) {
      id
      name
      description
      planet {
        id
      }
    }
  }
`;

export const querySpaceCenterFlights = gql`
  query GetSpaceCenterFlights($from: ID) {
    flights(from: $from, pageSize: 6) {
      nodes {
        id
        departureAt
        launchSite {
          name
        }
        landingSite {
          name
          planet {
            name
          }
        }
      }
    }
  }
`;

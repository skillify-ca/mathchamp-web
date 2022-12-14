import { gql } from "@apollo/client";

export const UPDATE_USER_LOSS_MCDATA = gql`
  mutation updateUserData($id: String = "") {
    update_multiplicationConnectData(
      where: { id: { _eq: $id } }
      _inc: { loss: 1, games_finished: 1 }
    ) {
      returning {
        id
        win
        loss
      }
    }
  }
`;

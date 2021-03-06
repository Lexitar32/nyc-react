import axios from "axios";
import swal from 'sweetalert'
// import { Redirect } from "react-router-dom";
import { EDIT_RECORD, GET_CONTACTS, STATE_MODAL, SIGNUP_USER, FETCH_FAQ ,UPLOADS} from "./type";
import UploadDoc from "./Userpage/modal/UploadDoc";

export const getContacts = () => {
  return async (dispatch) => {
    const users = await axios.get("https://naija-yellow-catalogue.herokuapp.com/contact");
    dispatch({
      type: GET_CONTACTS,
      payload: users.data,
    });
  };
};

export const editRecord = () => {
  return {
    type: EDIT_RECORD,
    payload: UploadDoc,
  };
};

export const uploadDoc = () => {
  return {
    type: EDIT_RECORD,
  };
};

export const stateModal = (dispatch) => {
  dispatch({
    type: STATE_MODAL,
    
  });
};

// Upload doc action
export const Uploads = (form) => {
  return {
    type:  UPLOADS,
    payload:form
  };
};

 


// FUNCTION CONTROLLING FAQ ACTION
export const fetchFaq= () => {
  return (dispatch) => {
    axios('https://naija-yellow-catalogue.herokuapp.com/faq', {
      headers: {
        "content-type": "application/json",
      }
    })
    .then((resp) => resp.json())
    .then((faqs) => 
    dispatch({
      type: FETCH_FAQ,
      payload: faqs,
    }))
    .catch((err) => console.log("Request Failed", err)); // Catch errors
   }
  };

// FUNCTION CONTROLLING SIGNUP ACTION
// export const signupUser = userData => {
//   return (dispatch) => {
//     axios.post('https://naija-yellow-catalogue.herokuapp.com/signup', { userData })
//     .then(response => {
//       console.log(response);
//       dispatch ({
//         type: SIGNUP_USER,
//         payload: response.data
//       })
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
// }

export const signupUser = (userData) => {
  return (dispatch) => {
  fetch("https://naija-yellow-catalogue.herokuapp.com/signup", 
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((resp) => resp.json())
    .then((post) =>
      dispatch({
        type: SIGNUP_USER,
        payload: post,
      })
    )
    if (userData) {
      return swal({
        title: "Great job!",
        text: "You have Registered Successfully",
        icon: "success",
        button: "Proceed",
      });
    }
  }
};

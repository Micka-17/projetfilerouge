// Importing the required dependencies
import Axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Function to fetch user account information
export function Account() {
  // State to store user information and loaded flag
  const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", bio: "", email: "", password: "", isModo: "", isAdmin: "", isSuperAdmin: "", avatar: "" })
  const [loaded, setLoaded] = useState(false)

  // Retrieving the token from local storage
  const token = localStorage.getItem('token')

  // Fetching user account information if not already loaded
  if (!loaded) {
    const user = Axios({
      method: "get",
      url: "http://localhost:3001/api/auth/account",
      headers: {
        Authorization: "Bearer " + token
      }
    })

    // Updating the user information and setting the loaded flag
    user.then((result) => {
      setUserInfo(result.data)
      setLoaded(true)
    })
  }

  // Returning the user information
  return userInfo
}

// Function to delete user account
export function DeletId(navigate, clicked) {
  if (clicked === true) {
    // Retrieving the token from local storage
    const token = localStorage.getItem('token')

    try {
      Axios({
        method: "delete",
        url: "http://localhost:3001/api/auth/delete",
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(function (response) {
        // Reloading the page after a delay, displaying a toast message, and handling token removal and navigation
        window.setTimeout(function () { document.location.reload() }, 5000)
        toast("Compte supprimé. :'(")
        localStorage.getItem('token')
        localStorage.removeItem('token')
        navigate("/main")
      })
    } catch (e) {
      // Displaying an error toast message
      const error29 = (e.response.data.error)
      toast(error29)
    }
  }
}

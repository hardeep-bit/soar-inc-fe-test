import { Avatar, Button } from "@mui/material";
import { useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import { validateField } from "../helpers/utility";

const EditProfileComponent = () => {
  const loginUser = useSelector((state: any) => state.user.loginUser);
  const [isErrorFound, setIsErrorFound] = useState(false);
  const [nameDetails, setNameDetails] = useState({
    value: loginUser && loginUser.name ? loginUser.name : '',
    error: ''
  })
  const [usernameDetails, setUsernameDetails] = useState({
    value: '',
    error: ''
  })
  const [mailDetails, setmailDetails] = useState({
    value: loginUser && loginUser.mail ? loginUser.mail : '',
    error: ''
  })
  const [passwordDetails, setPasswordDetails] = useState({
    value: '',
    error: ''
  })
  const [dobDetails, setDobDetails] = useState({
    value: '',
    error: ''
  })
  const [presentAddressDetails, setPresentAddressDetails] = useState({
    value: '',
    error: ''
  })
  const [permanentAddressDetails, setPermanentAddressDetails] = useState({
    value: '',
    error: ''
  })
  const [cityDetails, setCityDetails] = useState({
    value: '',
    error: ''
  })
  const [postalCodeDetails, setPostalCodeDetails] = useState({
    value: '',
    error: ''
  })
  const [countryDetails, setCountryDetails] = useState({
    value: '',
    error: ''
  })


  // initially form check to enable/disable button
  useEffect(() => {
    const { name, mail } = loginUser || {}

    setFormValidity({
      name: name || '',
      mail: mail || '',
    })
  }, [])

  useEffect(() => {
    if (loginUser) {
      updateLoginUserDetailsInForm(loginUser)
    }
  }, [loginUser])

  const setFormValidity = (allUserDetails: any) => {
    let isErrorFound = false;
    const {
      name = nameDetails.value,
      username = usernameDetails.value,
      mail = mailDetails.value,
      password = passwordDetails.value,
      dob = dobDetails.value, presentAddress = presentAddressDetails.value,
      permanentAddress = permanentAddressDetails.value,
      city = countryDetails.value, postalCode = postalCodeDetails.value,
      country = countryDetails.value
    } = allUserDetails;

    if (validateField('name', name, 'Name')) {
      isErrorFound = true
    } else if (validateField('username', username, 'Username')) {
      isErrorFound = true
    } else if (validateField('mail', mail, 'Mail')) {
      isErrorFound = true
    } else if (validateField('password', password, 'Password')) {
      isErrorFound = true
    } else if (validateField('dob', dob, 'DOB')) {
      isErrorFound = true
    } else if (validateField('presentAddress', presentAddress, 'Present Address')) {
      isErrorFound = true
    } else if (validateField('permanentAddress', permanentAddress, 'Permanent Address')) {
      isErrorFound = true
    } else if (validateField('city', city, 'City')) {
      isErrorFound = true
    } else if (validateField('postalCode', postalCode, 'Postal Code')) {
      isErrorFound = true
    } else if (validateField('country', country, 'Country')) {
      isErrorFound = true
    }

    setIsErrorFound(isErrorFound)
  }

  // to persist prev data of user.
  const updateLoginUserDetailsInForm = (loginUser: any) => {
    if (loginUser) {
      setNameDetails({
        value: loginUser.name,
        error: validateField('name', loginUser.name, 'Name')
      })
      setmailDetails({
        value: loginUser.mail,
        error: validateField('mail', loginUser.mail, 'Mail')
      })
    }
  }


  const onChangeHandler = (event: any) => {
    const { value, id } = event.target;
    const label = event.target?.getAttribute("aria-label");

    const anyError = validateField(id, value, label)

    if (id === 'name') {
      setNameDetails({
        value,
        error: anyError
      })
    } else if (id === 'username') {
      setUsernameDetails({
        value,
        error: anyError
      })

    } else if (id === 'mail') {
      setmailDetails({
        value,
        error: anyError
      })
      setFormValidity({ username: value })

    } else if (id === 'password') {
      setPasswordDetails({
        value,
        error: anyError
      })

    } else if (id === 'dob') {
      setDobDetails({
        value,
        error: anyError
      })
    } else if (id === 'presentAddress') {
      setPresentAddressDetails({
        value,
        error: anyError
      })
    } else if (id === 'permanentAddress') {
      setPermanentAddressDetails({
        value,
        error: anyError
      })
    } else if (id === 'city') {
      setCityDetails({
        value,
        error: anyError
      })
    } else if (id === 'postalCode') {
      setPostalCodeDetails({
        value,
        error: anyError
      })
    } else if (id === 'country') {
      setCountryDetails({
        value,
        error: anyError
      })
    }

    // validating form
    setFormValidity({ [id]: value })
  }

  if (!loginUser) return <div>Loading User Details...</div>
  const isFormErrorFound =
    isErrorFound || !!(nameDetails.error || usernameDetails.error ||
      mailDetails.error || passwordDetails.error ||
      dobDetails.error || presentAddressDetails.error ||
      permanentAddressDetails.error || cityDetails.error ||
      postalCodeDetails.error || countryDetails.error)


  return (
    <div className="inline-flex w-full">
      <div className="w-1/8 ">
        <div className="relative">
          <Avatar
            className="!w-[91px] !h-[91px] border-2 border-[#f5f7fa]"
            alt={loginUser.name} src={loginUser.displayPicture320pxURL}
          />
          <Avatar sx={{ width: 30, height: 30 }} className="cursor-pointer left-[65px] bottom-0 !absolute text-white !bg-primary">
            <EditIcon className="p-1" />
          </Avatar>
        </div>
      </div>
      <div className="w-full pl-8 pr-8">
        <div className="flex gap-8 mb-4">
          <div className="w-[48%]">
            <h5 className="mb-2">Your Name<span className="text-red-500">*</span></h5>
            <input
              id="name"
              aria-label="Name"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="text"
              onChange={onChangeHandler}
              value={nameDetails.value}
            />
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {nameDetails.error || ''}
            </p>
          </div>
          <div className="w-[48%]">
            <h5 className="mb-2">User Name<span className="text-red-500">*</span></h5>
            <input
              id="username"
              aria-label="Username"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="text"
              onChange={onChangeHandler}
              value={usernameDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {usernameDetails.error || ''}
            </p>
          </div>
        </div>
        <div className="flex gap-8 mb-4">
          <div className="w-[48%]">
            <h5 className="mb-2">Email<span className="text-red-500">*</span></h5>
            <input
              id="mail"
              aria-label="Mail"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="text"
              onChange={onChangeHandler}
              value={mailDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {mailDetails.error || ''}
            </p>
          </div>
          <div className="w-[48%]">
            <h5 className="mb-2">Password<span className="text-red-500">*</span></h5>
            <input
              id="password"
              aria-label="Password"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="password"
              onChange={onChangeHandler}
              value={passwordDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {/* {passwordDetails.error || ''} */}
              {passwordDetails.error === "Password is invalid." ?
                <span>It requires min, 3 lower case alphabets, 1 upper Case alphabet, 1 special character from !@$</span> :
                <span>{passwordDetails.error}</span>}
            </p>
          </div>
        </div>
        <div className="flex gap-8 mb-4">
          <div className="w-[48%]">
            <h5 className="mb-2">Date of Birth<span className="text-red-500">*</span></h5>
            <input
              id="dob"
              aria-label="DOB"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="date"
              onChange={onChangeHandler}
              value={dobDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {dobDetails.error || ''}
            </p>
          </div>
          <div className="w-[48%]">
            <h5 className="mb-2">Present Address<span className="text-red-500">*</span></h5>
            <input
              id="presentAddress"
              aria-label="Present Address"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="text"
              onChange={onChangeHandler}
              value={presentAddressDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {presentAddressDetails.error || ''}
            </p>
          </div>
        </div>
        <div className="flex gap-8 mb-4">
          <div className="w-[48%]">
            <h5 className="mb-2">Permanent Address<span className="text-red-500">*</span></h5>
            <input
              id="permanentAddress"
              aria-label="Permanent Address"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="text"
              onChange={onChangeHandler}
              value={permanentAddressDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {permanentAddressDetails.error || ''}
            </p>
          </div>
          <div className="w-[48%]">
            <h5 className="mb-2">City<span className="text-red-500">*</span></h5>
            <input
              id="city"
              aria-label="City"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="text"
              onChange={onChangeHandler}
              value={cityDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {cityDetails.error || ''}
            </p>
          </div>
        </div>
        <div className="flex gap-8 mb-8">
          <div className="w-[48%]">
            <h5 className="mb-2">Postal Code<span className="text-red-500">*</span></h5>
            <input
              id="postalCode"
              aria-label="Postal Code"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="text"
              onChange={onChangeHandler}
              value={postalCodeDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {postalCodeDetails.error || ''}
            </p>
          </div>
          <div className="w-[48%]">
            <h5 className="mb-2">Country<span className="text-red-500">*</span></h5>
            <input
              id="country"
              aria-label="Country"
              className="text-[15px] outline-none text-[#718EBF] border border-[#DFEAF2] rounded-[15px] w-full p-4"
              type="text"
              onChange={onChangeHandler}
              value={countryDetails.value}>
            </input>
            <p className="text-red-500 text-[12px] h-[14px] mt-[3px]">
              {countryDetails.error || ''}
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <Button
            disabled={isFormErrorFound}
            className={`!text-white !bg-primary w-[190px] h-[50px] !rounded-[15px] ${isErrorFound ? ' cursor-not-allowed opacity-[0.6]' : ''}`}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileComponent;
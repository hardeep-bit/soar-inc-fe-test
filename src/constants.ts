export const userValidations: any = {
  name: {
    onlynumbers: false,
    isRequired: true,
    regex: null,
    min: 4,
    max: 60
  },
  username: {
    onlynumbers: false,
    isRequired: true,
    regex: null,
    min: 4,
    max: 50
  },
  mail: {
    onlynumbers: false,
    isRequired: true,
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    min: 5,
    max: 120
  },
  password: {
    onlynumbers: false,
    isRequired: true,
    regex: /^(?=.*[A-Z])(?=.*[a-z]{3,})(?=.*[!@$])[a-zA-Z\d!@$]+$/,
    min: 5,
    max: 100
  },
  dob: {
    onlynumbers: false,
    isRequired: true,
    regex: null,
    min: 10,
    max: 10
  },
  presentAddress: {
    onlynumbers: false,
    isRequired: true,
    regex: null,
    min: 4,
    max: 100
  },
  permanentAddress: {
    onlynumbers: false,
    isRequired: true,
    regex: null,
    min: 4,
    max: 100
  },
  city: {
    onlynumbers: false,
    isRequired: true,
    regex: null,
    min: 4,
    max: 100
  },
  postalCode: {
    onlynumbers: true,
    isRequired: true,
    regex: null,
    min: 4,
    max: 7
  },
  country: {
    onlynumbers: false,
    isRequired: true,
    regex: null,
    min: 4,
    max: 100
  },
}

export const screenSizes: any = {
  largeDesktopMin: 1400,
  smallDesktopMin: 1200,
  tabletMin: 768,
  mobileMin: 350,
}
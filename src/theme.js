const generalVariables = {
  containerWidthLg: '75%',
  containerWidthMd: '86%',
  containerWidthSm: '90%',
}

var lightTheme = {
  primaryBg: '#F5E8E4',
  bgVariant: '#f5c7a9',
  primary: '#D1512D',
  primary2: '#D1512D40',
  primaryAccent: '#363537',
  primaryText: '#363537',
  secondaryText: '#8892B0',
}

var darkTheme = {
  primaryBg: '#411530',
  bgVariant: '#612020',
  primary: '#D1512D',
  primary2: '#D1512D40', // 40 - 25% opacity
  primaryAccent: '#F5C7A9',
  primaryText: '#F5C7A9',
  secondaryText: '#F5E8E4',
}

lightTheme = Object.assign({}, lightTheme, generalVariables)
darkTheme = Object.assign({}, darkTheme, generalVariables)

var loaderTheme = {
  height: '80px',
  width: '80px',
  innerHeight: '70px',
  innerWidth: '70px',
  primaryColor: '#D1512D',
  secondaryColor: '#F5E8E4',
}

export { lightTheme, darkTheme, loaderTheme }

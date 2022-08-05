const generalVariables = {
  containerWidthLg: '75%',
  containerWidthMd: '86%',
  containerWidthSm: '90%',
}

var lightTheme = {
  primaryBg: '#E2E2E2',
  bgVariant: '#3f151f',
  primary: '#D1512D',
  primary2: '#D1512D40',
  primaryAccent: '#612020',
  primaryText: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

var darkTheme = {
  primaryBg: '#411530', //'#363537',
  bgVariant: '#612020', // '#3f151f',
  primary: '#D1512D',
  primary2: '#D1512D40', // 40 - 25% opacity
  primaryAccent: '#F5C7A9',
  primaryText: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}

lightTheme = Object.assign({}, lightTheme, generalVariables)
darkTheme = Object.assign({}, darkTheme, generalVariables)

export { lightTheme, darkTheme }

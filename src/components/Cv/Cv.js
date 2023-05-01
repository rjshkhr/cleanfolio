function Cv() {
  console.log('CV page')
  // remove /cv from url
  const domain = window.location.href.replace(/\/cv$/, '')
  console.log({ domain })
  window.location.href = `${domain}/nmpereira_cv.pdf`
  return null
}

export default Cv

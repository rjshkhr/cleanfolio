function Cv() {
  // remove /cv from url
  const domain = window.location.href.replace(/\/cv$/, '')
  window.location.href = `${domain}/nmpereira_cv.pdf`
  return null
}

export default Cv

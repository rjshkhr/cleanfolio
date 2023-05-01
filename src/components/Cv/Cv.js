function Cv() {
  const domain = window.location.href.replace(/\/cv$/, '')
  window.location.href = `${domain}/nmpereira_cv.pdf`

  return null
}

export default Cv

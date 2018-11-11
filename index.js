const { LISTEN_FDS } = process.env

function socket ({ index, nextIndex = 0, firstSystemdFD = 3 }) {
  if (arguments.length < 1) index = nextIndex++

  if (!LISTEN_FDS) return null

  if (parseInt(LISTEN_FDS, 10) < nextIndex) return null

  return {
    fd: firstSystemdFD + index
  }
}

module.exports = {
  socket: socket
}
